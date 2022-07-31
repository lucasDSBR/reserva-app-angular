import { JsonProperty, JsonIgnore } from 'json-object-mapper';

export class ReservationSelector {    
    @JsonProperty({name: 'itens'})
    public itens: any;

    @JsonProperty({name: 'status'})
    public status: number = 0;

    @JsonProperty({name: 'tipePayment'})
    public tipePayment: number = 0;

    @JsonProperty({name: 'flagCardPayment'})
    public flagCardPayment: any;

    @JsonProperty({name: 'deliveryMethod'})
    public deliveryMethod: number = 0;

    @JsonProperty({name: 'address'})
    public address: string = '';

    @JsonProperty({name: 'addressNumber'})
    public addressNumber: string = '';

    @JsonProperty({name: 'neighborhood'})
    public neighborhood: string = '';

    @JsonProperty({name: 'nameClient'})
    public nameClient: string = '';
    
    @JsonProperty({name: 'phoneNumberClient'})
    public phoneNumberClient: string = '';
}