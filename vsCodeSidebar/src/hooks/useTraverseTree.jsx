import React from 'react'

function useTraverseTree() {
  function insertNode(tree, id, item, isFolder){
    if(tree.id == id){
        tree.items.unshift({
            id : new Date().getTime(),
            name:item,
            isFolder: isFolder,
            items:[]
        })
    }
    // applying DFS
    let latestNode = [];
    latestNode = tree.items.map((obj)=>{
        return insertNode(obj, id, item, isFolder);
    })
    return {...tree, items:latestNode}
  }

  return {insertNode}
}

export default useTraverseTree

// import React from 'react'

// function useTraverseTree() {
//   function insertNode(tree, id, item, isFolder){
//     if(tree.id==id  && isFolder){
//         tree.unShift({
//             id : new Date().getDate(),
//             name :item,
//             isFolder,
//             items: []
//         });
//         return tree;
//     }

//     let latestNode = [];
//     latestNode = tree.items.map((obj)=>{
//         // find in the lower nested tree and since obj is a object therefore it will search in that particular object only 
//         return insertNode(obj, id, item, isFolder)
//     })
//     // its not calling insertNode it is returning the udated tree by updating the items section of the prev tree
//     return {...tree, items:latestNode}
//   }

//   return {insertNode};
// }

// export default useTraverseTree

