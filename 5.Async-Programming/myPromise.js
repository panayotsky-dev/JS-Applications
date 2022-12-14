class MyPromise{
    constructor(executor){
        this.state = 'pending';
        this.value = undefined;

        this._onSuccess = null;
        this._onError = null;

        executor(this._resolve.bind(this), this._reject.bind(this))
    }

    _resolve(result){     //долна черта конвенция за служебни полета(вътрешни).
        this.state = 'fulfilled';
        this.value = result;
        if(typeof this._onSuccess === 'function'){
            this._onSuccess(this.value);
        }
    }

    _reject(result){
        this.state = 'failed';
        this.value = error;
        if(typeof this._onError === 'function'){
            this._onError(this.value);
        }
    }
    then(callback){
        this._onSuccess = callback;
        if (this.state == 'fulfilled'){
            this._onSuccess(this.value);
        }
        return this;
    }
    catch(callback){
        this._onError = callback;
        if(this.state == 'failed'){
            this._onError(this.value);
        }
        return this;
    }
    
}