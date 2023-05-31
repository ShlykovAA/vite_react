import './App.css'
import { AgeProvider } from './providers/age';
import { ContextTabs } from './sections/context-tabs';
import { Table } from './sections/table';
import { Tabs } from './sections/tabs';



function App() {
  return (
    <>
      <AgeProvider>
        <Tabs />
        <Table />
        <ContextTabs />
      </AgeProvider>
    </>
  )
}

export default App