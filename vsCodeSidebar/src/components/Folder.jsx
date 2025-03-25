import { useState } from "react";

function Folder({ explorer , handleInsertNode}) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    vision: false,
    folder: null
  })

  const handleInput = (e, folder)=>{
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      folder
    })
  }

  const onAdd = (e)=>{
    if(e.keyCode===13 && e.target.value){
      
      const data = handleInsertNode(explorer.id, e.target.value, showInput.folder)
      console.log(data)

      setShowInput({...showInput, visible: false})
    }
  }
  if (explorer.isFolder == true) {
    return (
      <div style = {{marginTop: 5}}>
        <div
          onClick={() => setExpand(!expand)} className="folder">
          <span>📁 {explorer.name}</span>
          <div className="add">
          <button onClick={(e)=>handleInput(e, true)}>Folder+</button>
          <button onClick={(e)=>handleInput(e, false)}>File+</button>

          </div>
          
          </div>
          <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
            

            
            {
              showInput.visible && (
                <div className="inputContainer">
                  <span>{showInput.folder?"📁":"📄"}</span>
                  <input 
                  type="text"
                  onBlur={()=>setShowInput({...showInput, visible:false})}
                  autoFocus
                  onKeyDown={(e)=>onAdd(e)}
                  />
                </div>
              )
            }
            {explorer.items.map((exp) => {
              return <Folder handleInsertNode = {handleInsertNode} explorer={exp} key ={exp.id}/>;
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>📄{explorer.name}</span>
      </div>
    );
  }
}

export default Folder;
