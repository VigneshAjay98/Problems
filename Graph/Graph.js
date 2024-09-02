class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1] && !this.adjacencyList[vertex2]) return "Failed!";
        if(!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if(!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;
        while(this.adjacencyList[vertex].length) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(adjVtx => {
            return adjVtx !== vertex2;
        })
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(adjVtx => {
            return adjVtx !== vertex1;
        })
    }

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    return dfs(neighbour);
                }
            })
        })(start)

        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            })
        }

        return result;
    }

    breadthFirstIterative(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            })
        }

        return result;
    }
}

const graph = new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")

//          A 
//        /   \     
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
