This library is made for React, Angular and other frameworks.

If you use TypeScript we have included the definition files.

## Example

Create an iframe on document.body
```javascript
import {
  IFrame
} from '@satispay/web-button-factory'

const iframe = new IFrame({
  datakey: 'dk_...',
  userCallback: 'https://yourwebsite.ext/userCallback',
  amount: 100,
  description: 'Testing Charge'
})
```

Now with `show()` you can display the iframe
```javascript
iframe.show()
```

## IFrame

### Methods

| Name | Description | Arguments |
| - | - | - |
| on(event, function) | Subscribe a function to an event | Event name, Function
| off(event) | Unsubscribe event | Event name |
| show | Show the IFrame | |
| hide | Hide the IFrame | |

### Events

| Name | Emit on | Arguments |
| - | - | - |
| close | Close modal | 
| load | IFrame is loaded |
| callback(charge) | Charge success or fail | Charge object |
| success(charge) | Charge success | Charge object |
| fail(charge) | Charge fail | Charge object |

Charge object is documented [here](https://s3-eu-west-1.amazonaws.com/docs.online.satispay.com/index.html#api-charges)

### Properties

The IFrame constructor accept the following properties

| Name | Type | Description | Mandatory | Default | Values |
| - | - | - | - | - | - |
| onlineService | string | Online service url | No | https://online.satispay.com |
| datakey | string | Shop datakey | Yes |
| userCallback | string | User callback url | Yes |
| amount | number | Amount in cents | Yes |
| description | string | Description of charge | Yes |
| orderId | string | ID of order, passed to user callback | No |
| phonenumber | string | Phone number of user | No |
| currency | string | Currency, currently only EUR is available | No | eur | eur |
| locale | string | Language | No | auto | it, en |
| drawon | string | Where to draw the iframe | No | document.body |

This properties are editable before `show()`
- userCallback
- amount
- description
- orderId
- phonenumber
- currency
- locale

## Button

The button function return an image url

| Name | Type | Description | Mandatory | Default | Values |
| - | - | - | - | - | - |
| onlineService | string | Online service url | No | https://online.satispay.com | |
| locale | string | Language | Yes |  | it, en |
| type | string | Type of button | No | pay | pay, donate |
| color | string | Color of button | No | red | red, white |
