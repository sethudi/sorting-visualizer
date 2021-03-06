import React from 'react';
import './SortingVisualizer.css';
import * as AlgorithmMerge from '../sortingAlgorithms/MergeSort.js';
import * as AlgorithmBubble from '../sortingAlgorithms/BubbleSort.js';
import * as AlgorithmQuick from '../sortingAlgorithms/QuickSort.js';
import * as AlgorithmHeap from '../sortingAlgorithms/HeapSort.js';
import Toolbar  from '../Toolbar/Toolbar';


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            array: [],
            count: 0,
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array =[];

        for( let i=0; i < 190; i++){
            array.push(randomIntFromIntervals(5,650));
        }
        this.setState({array});
    }
    mergeSort() {
        const animations = AlgorithmMerge.getMergeSortAnimations(this.state.array);
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
    quickSort(){
        let animations =AlgorithmQuick.getQuickSortAnimations(this.state.array);
        console.log('hello');
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
                const [barOneIdx, newHeightOne,barTwoIdx, newHeightTwo] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barOneStyle.height = `${newHeightOne}px`;
                barTwoStyle.height = `${newHeightTwo}px`;
              }, i * 50);
            }
          }
    }

    heapSort(){
      let animations =AlgorithmHeap.getHeapSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          console.log(animations[i]);
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
            const [barOneIdx, newHeightOne,barTwoIdx, newHeightTwo] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.height = `${newHeightOne}px`;
            barTwoStyle.height = `${newHeightTwo}px`;
          }, i * 50);
        }
      }
    }

    bubbleSort(){
        const animations = AlgorithmBubble.getBubbleSortAnimations(this.state.array);
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
              const [barOneIdx, newHeightOne,barTwoIdx, newHeightTwo] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${newHeightOne}px`;
              barTwoStyle.height = `${newHeightTwo}px`;
            }, i * 50);
          }
        }
    }
    render(){
        const {array} =this.state
        return(
          <div>
            <div className="array-container">
                {array.map((value,idx)=>(
                    <div 
                    className="array-bar" 
                    key={idx} 
                    style={{height: value }}></div>
                ))}
                
            </div> 
            <div>
              <Toolbar key ={this.state.count}
               resetArray ={()=>this.resetArray()}
               mergeSort ={()=>this.mergeSort()}
               quickSort ={()=>this.quickSort()}
               heapSort ={()=>this.heapSort()}
               bubbleSort ={()=>this.bubbleSort()}
              ></Toolbar>
            </div>
            
          </div>
            
        );
    }
}

function randomIntFromIntervals(min,max) {
    return Math.floor(Math.random() *(max-min +1) + min);
}

