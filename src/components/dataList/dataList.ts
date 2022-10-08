import Block from '../../core/Block';


interface DataListProps {
  item: string;
  itemData: string;
}

export class DataList extends Block {

  static componentName = 'DataList';

  constructor(props: DataListProps) {
    super({...props})
  }
  protected render(): string {
    return `
    <div class='data__list'><span>{{item}}</span><span>{{itemData}}</span></div>
    `
  } 
}

