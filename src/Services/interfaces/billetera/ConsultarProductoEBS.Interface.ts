export interface ConsultarProductoEBS {
    ContratoSiebel: ContratoSiebel[];
}

export interface ContratoSiebel {
    CABECERA:      Cabecera;
    Proceso:       string;
    Categoria:     string;
    Cuenta:        string;
    Origen:        string;
    NumeroTarjeta: string;
}

export interface Cabecera {
    OPERACION:  string;
    APLICATIVO: string;
    PARAMETRO:  Parametro[];
}

export interface Parametro {
    NOMBRE: string;
    VALOR:  string;
}

export interface ConsultarProductoEBS {
    CABECERA:               Cabecera;
    ContratoSiebelResponse: ContratoSiebelResponse;
}

export interface Cabecera {
    COD_ERROR: string;
    MSG_ERROR: string;
}

export interface ContratoSiebelResponse {
    Operacion:             string;
    Proceso:               string;
    AssetNumber:           string;
    SecondAssetNumber:     string;
    Categoria:             string;
    Cuenta:                string;
    Origen:                string;
    ErrorCode:             string;
    ErrorMessage:          string;
    ListOfProduct:         ListOfProduct;
    ListOfServiceInstance: ListOfServiceInstance;
}

export interface ListOfProduct {
    Product: Product[];
}

export interface Product {
    ProductName:          string;
    Description:          string;
    PartNumber:           number;
    Category:             string;
    DataBag:              number;
    UOMDataBag:           string;
    RequereRegionFlag:    string;
    TimePack:             string;
    UOMTimePack:          string;
    SMSPack:              string;
    ListOfBillingProduct: ListOfBillingProduct;
}

export interface ListOfBillingProduct {
    BillProduct: BillProduct[];
}

export interface BillProduct {
    BillingProductName: string;
    BillingPartNumber:  string;
}

export interface ListOfServiceInstance {
    ServiceInstance: ServiceInstance[];
}

export interface ServiceInstance {
    SlaveHierarchy:          string;
    AssetNumber:             string;
    SecondAssetNumber:       number;
    IntegrationId:           string;
    ServiceProductType:      string;
    ListOfInstanceComponent: ListOfInstanceComponent;
}

export interface ListOfInstanceComponent {
    InstanceComponent: InstanceComponent[];
}

export interface InstanceComponent {
    ProductName:   string;
    PartNumber:    string;
    Category:      number;
    Description:   string;
    PenaltyFlag:   number;
    ProvisionType: number;
}
