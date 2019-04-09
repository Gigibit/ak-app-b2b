export interface IFrameConstructor {
  onlineService?: string
  datakey: string
  userCallback: string
  amount: number
  description: string
  orderId?: string
  phoneNumber?: string
  currency?: string
  locale?: string,
  drawon?: string
}

interface SubscribedEvents {
  [event: string]: (data?: any) => void
}

const availableEvents: string[] = [
  'close',
  'load',
  'completed',
  'callback',
  'success',
  'fail'
]

export default class IFrame {
  public userCallback: string
  public amount: number
  public description: string
  public orderId?: string
  public phoneNumber?: string
  public currency?: string
  public locale?: string

  private element: HTMLIFrameElement | undefined
  private subscribedEvents: SubscribedEvents = {}
  private onlineService: string = 'https://online.satispay.com/'
  private datakey: string
  private drawon?: string

  constructor ({
    onlineService,
    datakey,
    userCallback,
    amount,
    description,
    orderId,
    phoneNumber,
    currency,
    locale,
    drawon
  }: IFrameConstructor) {
    if (!window) throw new Error('Window not found')
    if (!document || !document.body) throw new Error('Document or document body not found')

    if (onlineService) this.onlineService = onlineService

    if (!description) throw new Error('Description is mandatory')
    if (!amount) throw new Error('Amount is mandatory')
    if (!userCallback) throw new Error('userCallback is mandatory')
    if (!datakey) throw new Error('Datakey is mandatory')

    this.datakey = datakey
    this.userCallback = userCallback
    this.amount = amount
    this.description = description
    this.orderId = orderId
    this.phoneNumber = phoneNumber
    this.currency = currency
    this.locale = locale
    this.drawon = drawon

    this.initEvents()
    this.initIFrame()
  }

  public on (event: string, callback: (data?: any) => void) {
    if (!availableEvents.includes(event)) throw new Error(`Invalid event '${event}'`)
    if (event === 'success' || event === 'fail' || event === 'callback') console.warn(`WARNING! '${event}' event is deprecated, use 'completed' event`)
    this.subscribedEvents[event] = callback
  }

  public off (event: string) {
    if (this.subscribedEvents[event]) {
      delete this.subscribedEvents[event]
    }
  }

  public show () {
    if (!this.element || !this.element.contentWindow) return
    this.element.contentWindow.postMessage({
      type: 'summary',
      payload: {
        userCallback: this.userCallback,
        amount: this.amount,
        description: this.description,
        orderId: this.orderId,
        phoneNumber: this.phoneNumber,
        currency: this.currency,
        locale: this.locale
      }
    }, '*')
    this.element.style.display = 'block'
  }

  public hide () {
    if (!this.element) return
    this.element.style.display = 'none'
  }

  private initEvents () {
    window.addEventListener('message', (event: MessageEvent) => {
      if (!this.element || !this.element.contentWindow) return
      if (event.source === this.element.contentWindow) {
        switch (event.data.type) {
          case 'load':
            this.element.contentWindow.postMessage({
              type: 'init',
              payload: {
                datakey: this.datakey,
                userCallback: this.userCallback,
                amount: this.amount,
                description: this.description,
                orderId: this.orderId,
                phoneNumber: this.phoneNumber,
                currency: this.currency,
                locale: this.locale
              }
            }, '*')
            break
          case 'ready':
            this.emit('load')
            break
          case 'close':
            this.hide()
            this.emit('close')
            break
          case 'callback':
            const payload = event.data.payload

            Object.defineProperty(payload, 'chargeUuid', {
              get: () => {
                console.warn(`WARNING! 'chargeUuid' is deprecated, use uuid`)
                return payload.uuid
              }
            })
            Object.defineProperty(payload, 'euroTotal', {
              get: () => {
                console.warn(`WARNING! 'euroTotal' is deprecated, use '(amount / 100)'`)
                return payload.amount / 100
              }
            })
            Object.defineProperty(payload, 'unitsTotal', {
              get: () => {
                console.warn(`WARNING! 'unitsTotal' is deprecated, use 'amount'`)
                return payload.amount
              }
            })
            Object.defineProperty(payload, 'type', {
              get: () => {
                console.warn(`WARNING! 'type' is deprecated, don't use it`)
                return 'charge'
              }
            })
            Object.defineProperty(payload, 'statusDetail', {
              get: () => {
                console.warn(`WARNING! 'statusDetail' is deprecated, use 'status_detail'`)
                return payload.status_detail
              }
            })

            this.emit('callback', payload)
            this.emit('completed', payload.id)
            if (payload.status === 'SUCCESS') {
              this.emit('success', payload)
            } else {
              this.emit('fail', payload)
            }
            break
        }
      }
    })
  }

  private initIFrame () {
    this.element = document.createElement('iframe')
    this.element.setAttribute('style', 'display:none;margin:0;padding:0;position:fixed;top:0;left:0;width:100%;height:100%;border:0;z-index:9999;')
    this.element.setAttribute('src', `${this.onlineService}/iframe/${this.datakey}`)
    if (this.drawon) {
      const drawonElement = document.querySelector(this.drawon)
      if (drawonElement) drawonElement.appendChild(this.element)
      else throw new Error(`Element '${this.drawon}' not found`)
    } else {
      document.body.appendChild(this.element)
    }
  }

  private emit (event: string, payload?: object) {
    if (this.subscribedEvents[event]) {
      this.subscribedEvents[event](payload)
    }
  }
}
