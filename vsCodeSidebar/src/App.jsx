import { useState } from 'react'
import Folder from './components/Folder'
import explorer  from './Data/Data'
import './App.css'
import useTraverseTree from './hooks/useTraverseTree'

function App() {
  
  console.log(explorer)
  const[explorerData, setExplorerData] = useState(explorer)
  const {insertNode} = useTraverseTree();


  // initializing DFS
  const handleInsertNode = (folderId, item, isFolder)=>{
    // pura tree ka data to initiate the traversal
     const finalTree = insertNode(explorerData,folderId, item, isFolder)

     setExplorerData(finalTree)
  }
  return (
    <>
    <Folder handleInsertNode = {handleInsertNode} explorer = {explorerData}/>
    </>
  )
}

export default App
