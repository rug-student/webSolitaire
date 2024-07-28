import React, {useState} from 'react'
import "./index.css"
import {
  DndContext,
  useDraggable,
  useSensor,
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  PointerActivationConstraint,
  Modifiers,
  useSensors,
} from '@dnd-kit/core';

const Wrapper = ({children}) => (
  <div
    style={{
      maxWidth: 600,
      padding: 10,
      margin: '0 auto',
      marginTop: '10%',
    }}
  >
    {children}
  </div>
);

const defaultCoordinates = {
  x: 0,
  y: 0,
};

function DraggableItem({
  axis,
  label,
  style,
  top,
  left,
  handle,
  buttonStyle,
}: DraggableItemProps) {
  const {attributes, isDragging, listeners, setNodeRef, transform} =
    useDraggable({
      id: 'draggable',
    });

  return (
    <Draggable
      ref={setNodeRef}
      dragging={isDragging}
      handle={handle}
      label={label}
      listeners={listeners}
      style={{...style, top, left}}
      buttonStyle={buttonStyle}
      transform={transform}
      axis={axis}
      {...attributes}
    />
  );
}

function Solitaire() {

  const [{x, y}, setCoordinates] = useState(defaultCoordinates);
  const mouseSensor = useSensor(MouseSensor, {
    PointerActivationConstraint,
  });
  const touchSensor = useSensor(TouchSensor, {
    PointerActivationConstraint,
  });
  const keyboardSensor = useSensor(KeyboardSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  return(
    <main>
      <div className='container'>
      <DndContext
      sensors={sensors}
      onDragEnd={({delta}) => {
        setCoordinates(({x, y}) => {
          return {
            x: x + delta.x,
            y: y + delta.y,
          };
        });
      }}
      modifiers={Modifiers}
    >
      <Wrapper>
        <DraggableItem
          axis={axis}
          label={label}
          handle={handle}
          top={y}
          left={x}
          style={style}
          buttonStyle={buttonStyle}
        />
      </Wrapper>
    </DndContext>
  );
      </div>
    </main>
  )
  
}

export default Solitaire;

