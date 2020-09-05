class Stack {
    
    constructor() {
        this.data_array = [];
    }

     push(item) {
      return this.data_array.push(item);
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
}