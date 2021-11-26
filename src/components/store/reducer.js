import {SHOW_PRODUCT,ADD_PRODUCT_TO_CART,DELETE_PRODUCT_TO_CART,ADD_NEW_ACCOUNT,IS_VALID_ACCOUNT } from "./constants"

const innitialState = {
    products : [
        {
            id: 1,
            name:'Pleated Babydoll',
            src: 'https://www.victoriassecret.com/p/280x373/tif/3f/04/3f04a82b23384b468f40ea02da645627/1118574654A2_OM_F.jpg',
            price:59.5
        },
        {
            id:2,
            name:'New! Wicked Embroidered Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/7f/9f/7f9f26435dd34448a911c0fc135f62e4/111966835AQ2_OM_F.jpg',
            price:99.5
        },
        {
            id:3,
            name:'New Colors! Pleated Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/c7/76/c776be8364ab488b98c9bc53846fe609/111857460EDG_OM_F.jpg',
            price:59.5,
            onTrend:true
        }
        ,
        {
            id:4,
            name:'Wicked Open Back Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/42/98/4298708ee31c423391e55d8e307bac44/1119257654A2_OM_F.jpg',
            price:99.5
        }
        ,
        {
            id:5,
            name:'Bombshell Add-2-Cups Lace Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/7f/60/7f605fc035784a7abeb9365ee201d4eb/1119257754A2_OM_F.jpg',
            price:79.5
        },
        {
            id:6,
            name:'Uncupped Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/ff/e4/ffe4aaef8a24467781fd0a87be1b0750/111911935AT6_OM_F.jpg',
            price:89.50
        },{
            id:7,
            name:'Wicked Open Back Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/6c/b2/6cb25b0351fc4217b0b091a7397c665d/1119724954A2_OM_F.jpg',
            price:89.50,
            onTrend:true

        },
        {
            id:8,
            name:'Bombshell Add-2-Cups Lace Shine Strap Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/fc/a7/fca766b996064b6baf6e0616545728dc/1119257886Q4_OM_F.jpg',
            price:89.50
        },
        {
            id:9,
            name:'Uncupped Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/ff/e4/ffe4aaef8a24467781fd0a87be1b0750/111911935AT6_OM_F.jpg',
            price:89.50
        },
        {
            id:10,
            name:'Applique Cage Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/42/cd/42cde1f4fe2142d484cb4a5d27a8fd3c/1119184586Q4_OM_F.jpg',
            price:79.50,
            onTrend:true

        },
        {
            id:11,
            name:'Pleated Babydoll ',
            src:'https://www.victoriassecret.com/p/280x373/tif/3a/c9/3ac93c2138254b02893c51c289164cdd/1118574686Q4_OM_F.jpg',
            price:59.50
        },
        {
            id:12,
            name:'Unlined Sheer Mesh & Lace Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/ac/11/ac11cf54b8614f68b324f0227b2c6ea1/1118193186Q4_OM_F.jpg',
            price:49.50,
            onTrend:true,
        },
        {
            id:13,
            name:'Unlined Sheer Mesh & Lace Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/98/fd/98fd03ed49c6446e890fcb2aee89535a/1118193134Y5_OM_F.jpg',
            price:49.50,
            onTrend:true

        },
        {
            id:14,
            name:'Seamless Logo Brief Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/cd/af/cdafa7e1450148c796605e3f5750a638/1118885328P7_OM_F.jpg',
            price:29.50
        },
        {
            id:15,
            name:'Lace String Bikini Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/01/57/01572bbda05c4075a7a54c36d910b48a/1119166786Q4_OM_F.jpg',
            price:39.50,
            onTrend:true

        },
        {
            id:16,
            name:'No-show Midi Brief Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/58/12/58126a927d984a3aadbda0ae905d2882/111576455F16_OM_F.jpg',
            price:49.50
        },
        {
            id:17,
            name:'Stretch Cotton Bikini Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/a0/58/a05857bd05dc4a0c8d938dd4a3496868/111607455DSM_OM_F.jpg',
            price:39.50
        },
        {
            id:18,
            name:'Stretch Cotton High-leg Brief Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/a2/47/a247827cc1ae406cb4d7536cada41b90/111607425F86_OM_F.jpg',
            price:49.50,
            onTrend:true

        },
        {
            id:19,
            name:'Unlined Sheer Mesh & Lace Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/4e/af/4eafb71e94f14fed8a516e5e6e2fce0f/111925745ASK_OM_F.jpg',
            price:29.50
        },
        {
            id:20,
            name:'Stretch Cotton High-leg Brief Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/55/0e/550e181109a048a1bd33aba9eeab94af/111607420V6R_OM_B.jpg',
            price:49.50,
            onTrend:true

        },
        {
            id:21,
            name:'Seamless Bikini Panty in Shine',
            src:'https://www.victoriassecret.com/p/280x373/tif/09/b6/09b6c222ab6b4d33b3c36d651c4bfaa6/111921395CQ4_OM_F.jpg',
            price:29.50,
            onTrend:true

        },
        {
            id:22,
            name:'Unlined Sheer Mesh & Lace Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/0f/56/0f56bd76d4c34752b4cb254bf779ecb3/1117705586B7_OM_F.jpg',
            price:39.50
        },
        {
            id:23,
            name:'Lace Waist Cotton High Leg Brief Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/08/2e/082edd4a6079450c84c6fde8bbfa993a/111576454WAC_OM_F.jpg',
            price:19.50,
            onTrend:true

        },
        {
            id:24,
            name:'Stretch Cotton String Bikini Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/80/2f/802f353be4494b55a57efd3a4e5d6125/111608705DMS_OM_F.jpg',
            price:29.50,
            onTrend:true

        },
        {
            id:25,
            name:'Point D Esprit Strappy Bikini',
            src:'https://www.victoriassecret.com/p/280x373/tif/b6/7c/b67c55eea1234ca6975fc330ef41e7ec/1119237976S5_OM_F.jpg',
            price:49.50
        },
        {
            id:26,
            name:' Midi Brief Panty',
            src:'https://www.victoriassecret.com/p/280x373/tif/91/9a/919aefdab90a409c9748ce350fff8aab/111576455GB0_OM_F.jpg',
            price:19.50,
            onTrend:true

        },
        {
            id:27,
            name:'Unlined Sheer Mesh & Lace Babydoll',
            src:'https://www.victoriassecret.com/p/280x373/tif/06/f0/06f09c69d0084a72aa243463d2107765/1116074296L4_OM_F.jpg',
            price:29.50
        },
       
    ],
    productInfo:[],
    yourCart:[],
    login:false,
    accountList:[],
    CurrentUserName:''
}

function reducer(state,action){
    switch(action.type){
        case SHOW_PRODUCT:
            return {
                ...state,
                productInfo: action.payload
            }
        case ADD_PRODUCT_TO_CART:
            const addedProduct = [...state.yourCart,action.payload]
            return {
                ...state,
                yourCart:addedProduct
            }
        case DELETE_PRODUCT_TO_CART:
            let cart = [...state.yourCart]
            cart.splice(action.payload,1)
            return {
                ...state,
                yourCart:cart
            }
        case ADD_NEW_ACCOUNT:
            return {
                ...state,
                accountList:[...state.accountList,action.payload]
            }
        case IS_VALID_ACCOUNT:
            return {
                ...state,
                login:action.payload.valid,
                CurrentUserName:action.payload.userName
            }
    

        default:
            return state
    }
}
export {innitialState}
export default reducer