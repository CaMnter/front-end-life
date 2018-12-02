/**
 * Created by：CaMnter
 */

/***********************
 * 实例：消除魔术字符串 *
 ***********************/

/**
 * 魔术字符串指的是
 * 在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
 * 风格良好的代码, 应该尽量消除魔术字符串, 该由含义清晰的变量代替
 */

function getFragmentA(viewType) {
    switch (viewType) {
        case 'view_type_hot_search':  // 魔法字符串
            // create hot search fragment
            break;
        case 'view_type_history':  // 魔法字符串
            // create history fragment
            break;
        case 'view_type_search_result':  // 魔法字符串
            // create search result fragment
            break;
    }
}
// 魔法字符串
getFragmentA('view_type_hot_search');
// 魔法字符串
getFragmentA('view_type_history');
// 魔法字符串
getFragmentA('view_type_search_result');

/**
 * 正常 消除魔法字符串
 */
const ViewType = {
    hotSearch: 'view_type_hot_search',
    history: 'view_type_history',
    searchResult: 'view_type_search_result'
};

function getFragmentB(viewType) {
    switch (viewType) {
        case ViewType.hotSearch:
            // create hot search fragment
            break;
        case ViewType.history:
            // create history fragment
            break;
        case ViewType.searchResult:
            // create search result fragment
            break;
    }
}
getFragmentB(ViewType.hotSearch);
getFragmentB(ViewType.history);
getFragmentB(ViewType.searchResult);

/**
 * 只要确保不会跟其他属性的值冲突即可
 * 很适合改用Symbol值
 *
 * 用 Symbol 消除魔法字符串
 */

const ViewTypeSymbol = {
    hotSearch: Symbol('view_type_hot_search'),
    history: Symbol('view_type_history'),
    searchResult: Symbol('view_type_search_result')
};

function getFragmentV(viewType) {
    switch (viewType) {
        case ViewTypeSymbol.hotSearch:
            // create hot search fragment
            break;
        case ViewTypeSymbol.history:
            // create history fragment
            break;
        case ViewTypeSymbol.searchResult:
            // create search result fragment
            break;
    }
}
getFragmentV(ViewTypeSymbol.hotSearch);
getFragmentV(ViewTypeSymbol.history);
getFragmentV(ViewTypeSymbol.searchResult);


