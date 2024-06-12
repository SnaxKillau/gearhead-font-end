
import { combineReducers } from "redux";
import cartReducer from "../reducer/CartReducer"
import notiReducer from "./NotificationReducer";
import notificationDeleteReducer from "./NoticationDeleteReducer";
import topTransformationReducer from "./TopTransformation";
import brandGroupReducer from "./BrandGroupReduce";
import transfomationByBrandReducer from "./TransformationByBrandReducer";
import transfomationBySearchReducer from "./TransformationSerch";
import transformationDetailReducer from "./TransformationDetailReducer";
import buyReducer from "./BuyReducer";
import invoiceReducer from "./InvoiceRedux";
import invoiceListReducer from "./InvoiceListReducer";
import brandReducer from "./BrandReducer";
import orderReducer from "./OrderReducer";
const rootReducer = combineReducers({
    cartReducer : cartReducer,
    noticationReducer : notiReducer,
    brandReducer : brandReducer,
    notificationDeleteReducer : notificationDeleteReducer,
    topTransformationReducer: topTransformationReducer,
    brandGroupReducer : brandGroupReducer,
    transfomationByBrandReducer : transfomationByBrandReducer,
    transfomationBySearchReducer : transfomationBySearchReducer,
    transformationDetailReducer : transformationDetailReducer,
    buyReducer : buyReducer,
    invoiceReducer : invoiceReducer,
    invoiceListReducer : invoiceListReducer,
    orderReducer : orderReducer
})
export default rootReducer;