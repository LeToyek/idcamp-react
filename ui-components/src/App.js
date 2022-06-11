import Header from "./components/exercise";
import Profile from "./components/profile";
import News from "./components/news";

function App() {
  const profile = {
    name: 'Toyek',
    username: 'laziz',
    bio: 'mahasiswa poltek',
    isVerified : true
  }
  const someNews =[
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ]
  return (
    <div className="App">
      {/* <Header name='toyek' company='google' />
      <Profile account={profile}/> */}
      {someNews.map(news => <News someNews={news}/>)}

    </div>
  );
}

export default App;
