import { Segment, Header, Image} from "semantic-ui-react";


export const PokedexHeader = ({name, author}) => {
    return (
      <Segment inverted padded='very' vertical >
        <Header as='h1'>This is a Header for {name} Pokedex!</Header>
        <Image src={'haunter.webp'} centered size='tiny'/>
        <Header as='h3'>Author: {author}</Header>
      </Segment>
     
    )
  }
  export default PokedexHeader;
  