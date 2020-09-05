class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.isEmpty())
        return "Empty Queue";
        return this.queue.shift();
    }
    isEmpty()
    {
        return this.queue.length==0;
    }
    printQueue(queue){
        var queStr = "";
        for(let i=0; i<queue.length; i++)
        {
            queStr += queue[i]+" ";
        }
        return queStr;
    }

    front(){
        return this.queue[0];
    }
}