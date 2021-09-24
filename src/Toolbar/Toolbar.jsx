
import React, { Component } from "react";
import "./Toolbar.css";

class Toolbar extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }

 

  render() {
    const {resetArray, mergeSort, quickSort, heapSort, bubbleSort} = this.props;

    return (
      <div id="toolbar">
            <button onClick= {() => resetArray()}>Generate New Array</button>
            <button onClick= {() => mergeSort()}>Merge Sort</button>
            <button onClick= {() => quickSort()}>Quick Sort</button>
            <button onClick= {() => heapSort()}>Heap Sort</button>
            <button onClick= {() => bubbleSort()}>Bubble Sort</button>
      </div>
    )
  }
}

export default Toolbar;
