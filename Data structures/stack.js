class Stack {
    
    constructor() {
        this.data_array = [];
    }

     push(item) {
      return this.data_array.unshift(item);
    }
    pop()
    {
        return this.data_array.pop();
    }
    isEmpty()
    {
        return this.data_array.length==0;
        
    }
    top(){
        return this.data_array[this.data_array.length-1];
    }

    printStack(stack){
        var stackStr = "";
        for(let i=stack.length-1; i>0; i++)
        {
            stackStr += stack[i]+" ";
        }
        return stackStr;
    }
}