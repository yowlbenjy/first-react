import './App.css'
import Entry from './components/Entry.jsx'
import Header from './components/Header.jsx'
import EntryData from './entryData.js'
 

function App() {
  
  const entryArray = EntryData.map(entry => (
    <Entry
      key={entry.id}
      imgSrc={entry.imgSrc}
      imgAlt={entry.imgAlt}
      mapLink={entry.mapLink}
      title={entry.title}
      location={entry.location}
      date={entry.date}
      description={entry.description}
    />
  ))
  
  return (
    <>
      <Header /> 
      {entryArray}
    </>
  )
}

export default App
