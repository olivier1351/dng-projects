"use client";
import ReactFlow, { MiniMap, Controls, Background, Position } from 'react-flow-renderer';
import Card from '@/components/ui/card'; // Custom card node


const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

const nodes = [
  {
    id: '1',
    data: { label: 'First Node', description: 'Description for first node', textCta: 'Button text', tags: 'Tags' },
    position: { x: 0, y: 0 },
    type: 'cardNode',

  },
  {
    id: '2',
    data: { label: 'Second Node', description: 'Description for second node', textCta: 'Button text', tags: 'Tags' },
    position: { x: 400, y: 100 },
    type: 'cardNode',

  },
  {
    id: '3',
    data: { label: 'Third Node', description: 'Description for third node', textCta: 'Button text', tags: 'Tags' },
    position: { x: 400, y: 400 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    type: 'cardNode',  // Specify the custom node type

  },
];

// Custom node renderer configuration
const nodeTypes = {
  cardNode: Card,
};

const WorkflowBuilder = () => {
  return (
    <div className="workflow-builder">
      <h1 className="text-3xl font-bold mb-4">Workflow Builder</h1>
      <div className="react-flow-container" style={{ height: '80vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>

    </div>
  );
};

export default WorkflowBuilder;
