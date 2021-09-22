import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms.js';


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array =[];

        for( let i=0; i < 190; i++){
            array.push(randomIntFromIntervals(5,700));
        }
        this.setState({array});
    }
    mergeSort() {
        const animations = sortingAlgorithms.getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'turquoise';
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 50);
          } else {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * 50);
          }
        }
    }
    quickSort(){}

    heapSort(){}

    bubbleSort(){}
    render(){
        const {array} =this.state
        return(
            <div className="array-container">
                {array.map((value,idx)=>(
                    <div 
                    className="array-bar" 
                    key={idx} 
                    style={{height: value }}></div>
                ))}
                <button onClick= {() => this.resetArray()}>Generate New Array</button>
                <button onClick= {() => this.mergeSort()}>Merge Sort</button>
                <button onClick= {() => this.quickSort()}>Quick Sort</button>
                <button onClick= {() => this.heapSort()}>Heap Sort</button>
                <button onClick= {() => this.bubbleSort()}>Bubble Sort</button>
            </div>
            
        );
    }
}

function randomIntFromIntervals(min,max) {
    return Math.floor(Math.random() *(max-min +1) + min);
}
function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;

    for (let i=0; i<arrayOne.length; i++){
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}