var DPHistory = (function () {
    var idCounter = 'dqCounter',
        _length, _insert,
        _pullAll, _pullOne,
        _createId, _clear, api;
    
    _createId = function() {  
        return localStorage[idCounter]++;
    }

    _length = function() {
        return localStorage[idCounter];
    }

    _insert = function(val) {
        var key   = _createId(),
            pair = {
                'id': key,
                'val': val,
                'date': new Date() 
            },
            item, store, saved;
        
        localStorage.setItem(key, JSON.stringify(pair));

        return pair;
    }

    _pullAll = function() {
        var items = [],
            i, obj;

        for(i = 0, l = _length(); i < l; i++) {
            var item = localStorage.getItem(i);
            obj = JSON.parse(item);
            items.push(obj);
        }

        return items;
    }

    _pullOne = function(item) {
        var it = localStorage.getItem(item),
            obj = JSON.parse(it);
            
        return obj;
    }

    _clear = function() {
        try {
            localStorage[idCounter] = [];
            return true;
        } catch (e) {
            return 'error: ' + e;
        }
    }

    return {
        add: function(item) {
            return _insert(item);
        },
        clear: function() {
            return _clear();
        },
        getAll: function() {
            return _pullAll();
        },
        getOne: function(item) {
            return _pullOne(item);
        }
    };
})();
