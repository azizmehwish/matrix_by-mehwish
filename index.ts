#! /usr/bin/env node
class Mtatrix{
   private data:number[][];
   private rows:number
   private col:number


 constructor (data:number[][]){
    this.data=data
    this.rows=data.length
    this.col=data[0].length
    
}


public toString():string{
    return this.data.map(rows=>rows.join(' ')).join('\n')
}

public add(other:Mtatrix):Mtatrix{
    if(this.rows!==other.rows||this.col!==other.col){
        throw new 
        Error("matrix are not equal")
    }
    let result:number[][]=[]
    for(let i=0;i<this.rows;i++){
        let row:number[]=[]
        for(let j=0;j<this.col;j++){
            row.push(this.data[i][j]+other.data[i][j])
        }
    result.push(row)
    }return new Mtatrix(result)

 } 

 public substract(other:Mtatrix):Mtatrix{
    if(this.rows!==other.rows||this.col!==other.col){
        throw new 
        Error("matrix are not equal")
    }
    let result:number[][]=[]
    for(let i=0;i<this.rows;i++){
        let row:number[]=[]
        for(let j=0;j<this.col;j++){
            row.push(this.data[i][j]-other.data[i][j])
        }
    result.push(row)
    }return new Mtatrix(result)
}


public transpose ():Mtatrix{
    
    
    let result:number[][]=[]
    for(let i=0;i<this.rows;i++){
        let row:number[]=[]
        for(let j=0;j<this.col;j++){
            row.push(this.data[j][i])
        }
    result.push(row)
    }return new Mtatrix(result)
}


public myltiply(other:Mtatrix):Mtatrix{
    if(this.rows!==other.rows||this.col!==other.col){
        throw new 
        Error("matrix are not equal")
    }
    let result:number[][]=[]
    for(let i=0;i<this.rows;i++){
        let row:number[]=[]
        for(let j=0;j<this.col;j++){
            let sum=0
          for  (let k=0;k<this.col;k++){
                sum+=this.data[i][k]*other.data[k][j]
            }
            row.push(sum)
        }
    result.push(row)

    }return new Mtatrix(result)
}
}


const m2= new Mtatrix([
   [5,6],
   [7,8]
])

const m1=new Mtatrix([
[1,2],
[3,4]
])



console.log(`m1=\t\n${m1.toString()}`);

console.log(`m2=\t\n${m2.toString()}`);
console.log(`addition of m1&m2\t\n${m1.add(m2).toString()}`);
console.log(`substraction =\t\n${m2.substract(m1).toString()}`);
console.log(`transepose of m1\t\n${m1.transpose().toString()}`);

console.log(`multiply =\t\n${m1.myltiply(m2).toString()}`);


