import { Container, Name, NameContainer } from './styles'
import { IClient, IServices } from '../../clients'
import { FlatList, Image } from 'react-native'

interface IClientCardProps {
  name: string
  services: Array<IServices>
}

export function ClientCard({services, ...props}: IClientCardProps) {
  return (
    <Container>
      <NameContainer>
        <Name>{props.name}</Name>
        <FlatList
          data={services}
          keyExtractor={services => services.id}
          renderItem={({item:service}) => (
            <Image source={{ uri: service.icon}}/>
          )}
        />
      </NameContainer>

      
    </Container>
  )
}
