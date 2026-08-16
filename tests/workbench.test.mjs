import test from'node:test';import assert from'node:assert/strict';import{obligationsFor,exceptionStatus,buildRecord}from'../workbench-core.js';
test('multi-role matrix',()=>assert.deepEqual(new Set(obligationsFor(['provider','deployer']).map(x=>x.role)),new Set(['provider','deployer'])));
test('profiling guard',()=>assert.equal(exceptionStatus({annexIII:true,profiling:true}),'blocked'));
test('exception needs evidence',()=>assert.equal(exceptionStatus({annexIII:true,basis:'narrow',evidence:'short'}),'unsupported'));
test('Article 50 row',()=>assert.ok(obligationsFor([],{article50:true}).some(x=>x.article==='Art. 50')));
test('versioned record',()=>assert.equal(buildRecord({systemId:'AI-1'}).systemId,'AI-1'));
