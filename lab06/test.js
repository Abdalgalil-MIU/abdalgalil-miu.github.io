"use strict"
describe("String Filter",()=>{

    it("Filter \'This house is not nice!\' by [not] is This house is nice!",()=>{
        assert.equal("This house is not nice!".filter("not"),"This house is nice!"); 
    });
    it("Filter \'This house is not nice!\' by [not,house] is This is nice!",()=>{
        assert.equal("This house is not nice!".filter("not","house"),"This is nice!")
    });

});

describe("Bubble Sort Array",()=>{
    it("Sort [6,4,0, 3,-2,1] by bubbleSort is [-2,0,1,3,4,6]",()=>{
        assert.deepEqual([6,4,0, 3,-2,1].bubbleSort(),[-2,0,1,3,4,6]);
    });
    it("Sort [9,13,5,-4,5,2,-2] by bubbleSort is [-4,-2,2,5,5,9,13]",()=>{
        assert.deepEqual([9,13,5,-4,5,2,-2].bubbleSort(),[-4,-2,2,5,5,9,13]);
    });
});

describe("Person Teacher Inheritance",()=>{
    it("Simple Teacher Test",()=>{
        assert.equal(new Teacher("Abdalgalil",31).teach("WAP"),"Abdalgalil is now teaching WAP");
    });

});
