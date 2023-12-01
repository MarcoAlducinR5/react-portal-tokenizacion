import { EBMHeaderRequest, EBMHeaderResponse } from "../../common/HeadersApigwcs.Interface";

export interface RequestGestionarSSCambioFormaPagoInterface {
    EBMHeaderRequest: EBMHeaderRequest;
    PagoRequestEBO:   PagoRequestEBO;
}

export interface PagoRequestEBO {
    Operacion:                  string;
    Proceso:                    string;
    Cuenta:                     string;
    PayOffFlag:                 string;
    CodigoSKY:                  string;
    PaymentCardNumber:          string;
    PaymentInstrument:          string;
    InstrumentIdentifier:       string;
    AuthenticationTransactioId: string |null;
    xid:                        string| null;
    BillFrequency:              string;
    BillType:                   string;
    PaymentMethod:              string;
    PaymentSystem:              string;
    PaymentBillFeeFlag:         string;
    Comments:                   string;
    Origen:                     string;
    ListOfServiceInstance:      ListOfServiceInstance;
}

export interface ListOfServiceInstance {
    ServiceInstance: ServiceInstance[];
}

export interface ServiceInstance {
    SlaveHierarchy:          string;
    AssetNumber:             string;
    SecondAssetNumber:       string;
    IntegrationId:           string;
    ServiceProductType:      string;
    ListOfInstanceComponent: ServiceInstanceListOfInstanceComponent;
}

export interface ServiceInstanceListOfInstanceComponent {
    ListOfInstanceComponent: ListOfInstanceComponentElement[];
}

export interface ListOfInstanceComponentElement {
    ProductName:   string;
    PartNumber:    string;
    Category:      string;
    Description:   string | null;
    PenaltyFlag:   string | null;
    ProvisionType: string;
    Action:        string;
}

export interface ResponseGestionarSSCambioFormaPagoInterface {
    EBMHeaderResponse: EBMHeaderResponse;
    PagoResponseEBO:   PagoResponseEBO;
}

export interface PagoResponseEBO {
    Operacion:    string;
    Proceso:      string;
    Cuenta:       number;
    Origen:       string;
    SRNumber:     string | null;
    ErrorCode:    string | null;
    ErrorMessage: string | null;
}
