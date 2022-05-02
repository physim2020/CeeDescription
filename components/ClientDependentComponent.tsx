import React, { useEffect } from 'react';

import createEngine, {
    DiagramModel,
    DefaultNodeModel,
    DefaultLinkModel,
  } from "@projectstorm/react-diagrams";

import { CanvasWidget } from '@projectstorm/react-canvas-core';
  
import ReactDOM from "react-dom";


  type Props = {
    foo: string;
  }
   const ClientDependentComponent: React.FC<Props> = (props) => {

    // useEffect(() => {
    // if (typeof window !== 'undefined') {  
        const engine = createEngine();
      
        const model = new DiagramModel();
        
        const node1 = new DefaultNodeModel({
          name: "ノード1"
        });
        node1.setPosition(300, 200);
        node1.addInPort("ポート1-1");
        node1.addInPort("ポート1-2");
        
        const node2 = new DefaultNodeModel({
          name: "ノード2"
        });
        node2.setPosition(100, 400);
        node2.addOutPort("ポート2-1");
        
        const link1 = new DefaultLinkModel()
        link1.setTargetPort(node1.getPort("ポート1-1")!)
        link1.setSourcePort(node2.getPort("ポート2-1")!)
        
        model.addAll(node1, node2, link1);
        
        // install the model into the engine
        engine.setModel(model);  
      
        document.addEventListener("DOMContentLoaded", () => {
          ReactDOM.render(
            <CanvasWidget className="diagram-container"  engine={engine} />,
            document.querySelector("#root")
          );
        });

        return <CanvasWidget className="diagram-container"  engine={engine} /> //<span>{props.foo}</span>
      // }  
    // });
  }

  export default ClientDependentComponent;
