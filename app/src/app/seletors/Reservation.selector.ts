import { JsonProperty, JsonIgnore } from 'json-object-mapper';

export class ReservationSelector {
    
    @JsonProperty({name: 'user'})
    public user: string = '';
    
    @JsonProperty({name: 'itens'})
    public itens: any;

    @JsonProperty({name: 'status'})
    public status: boolean = false;

    @JsonProperty({name: 'tipePayment'})
    public tipePayment: boolean = false;

    @JsonProperty({name: 'flagCardPayment'})
    public flagCardPayment: any;

    @JsonProperty({name: 'deliveryMethod'})
    public deliveryMethod: any;

    @JsonProperty({name: 'address'})
    public address: string = '';

    @JsonProperty({name: 'addressNumber'})
    public addressNumber: string = '';

    @JsonProperty({name: 'neighborhood'})
    public neighborhood: string = '';
}