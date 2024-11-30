import {AlbumsProvider} from './src/context/AlbumContext';
import {ArtistProvider} from './src/context/ArtistContext';
import {ProfileProviver} from './src/context/ProfileContext';
import Routes from './src/navigation/Routes';

const App = () => {
  return (
    <ProfileProviver>
      <ArtistProvider>
        <AlbumsProvider>
          <Routes />
        </AlbumsProvider>
      </ArtistProvider>
    </ProfileProviver>
  );
};
export default App;
