import test from'node:test';import assert from'node:assert/strict';import{classify}from'../core.js';
test('outside scope',()=>assert.equal(classify({euNexus:false}).primary.code,'out'));
test('prohibited overrides other routes',()=>assert.equal(classify({euNexus:true,aiSystem:'yes',prohibited:{socialScoring:true},annexIII:['Employment']}).primary.code,'prohibited'));
test('Annex III is high risk',()=>assert.equal(classify({euNexus:true,aiSystem:'yes',annexIII:['Employment'],article63:false}).primary.code,'high'));
test('profiling blocks 6(3)',()=>assert.equal(classify({euNexus:true,aiSystem:'yes',annexIII:['Education'],article63:true,profiling:true}).primary.code,'high'));
test('Article 50 transparency',()=>assert.equal(classify({euNexus:true,aiSystem:'yes',transparency:{chatbot:true}}).primary.code,'transparency'));
