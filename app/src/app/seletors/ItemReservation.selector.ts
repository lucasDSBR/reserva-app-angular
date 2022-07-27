import { JsonProperty, JsonIgnore } from 'json-object-mapper';

export class ItemReservationSelector {
    
    @JsonProperty({name: 'id'})
    public id: any;
    
    @JsonProperty({name: 'name'})
    public name: string = '';
    
    @JsonProperty({name: 'pathPhoto'})
    public pathPhoto: string = '';

    @JsonProperty({name: 'description'})
    public description: string = '';

    @JsonProperty({name: 'fee'})
    public fee: boolean = false;

    @JsonProperty({name: 'valueFee'})
    public valueFee: any;

    @JsonProperty({name: 'amountDemanded'})
    public amountDemanded: any;

    @JsonProperty({name: 'price'})
    public price: number = 0.0;

}