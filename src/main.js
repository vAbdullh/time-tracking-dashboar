var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var data;
(function () { return __awaiter(_this, void 0, void 0, function () {
    var response, jsonData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('/src/data.json')];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('data file not response');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                jsonData = _a.sent();
                data = jsonData;
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
// fetchDataAndStoreGlobally();
var sections = document.querySelectorAll('section');
var loadingAnimation = function () {
    sections.forEach(function (section) {
        var secondDiv = section.querySelectorAll('div')[1];
        if (secondDiv) {
            secondDiv.classList.add('animate-pulse');
        }
    });
};
var removeLoadingAnimation = function () {
    sections.forEach(function (section) {
        var secondDiv = section.querySelectorAll('div')[1];
        if (secondDiv) {
            secondDiv.classList.remove('animate-pulse');
        }
    });
};
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var target = event.currentTarget;
            if (target.classList.contains('text-active')) {
                return;
            }
            loadingAnimation();
            buttons.forEach(function (btn) { return btn.classList.remove('text-active'); });
            target.classList.add('text-active');
            updatePage(target.id);
            removeLoadingAnimation();
        });
    });
});
function updatePage(target) {
    if (target != 'daily'
        && target != 'weekly'
        && target != 'monthly') {
        return;
    }
    var items = [
        { id: 'workCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'workPrevious', dataTarget: data[0].timeframes[target].previous },
        { id: 'playCurrent', dataTarget: data[1].timeframes[target].current },
        { id: 'playPrevious', dataTarget: data[1].timeframes[target].previous },
        { id: 'studyCurrent', dataTarget: data[2].timeframes[target].current },
        { id: 'studyPrevious', dataTarget: data[2].timeframes[target].previous },
        { id: 'exerciseCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'exercisePrevious', dataTarget: data[0].timeframes[target].previous },
        { id: 'socialCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'socialPrevious', dataTarget: data[0].timeframes[target].previous },
        { id: 'selfCareCurrent', dataTarget: data[0].timeframes[target].current },
        { id: 'selfCarePrevious', dataTarget: data[0].timeframes[target].previous },
    ];
    items.forEach(function (update) { return updateSpanText(update.id, update.dataTarget); });
}
// const updatePage = (target: string) => {
//     try {
// const itsms = [
// { id: 'workCurrent', dataTarget: data[0].timeframes[target].current },
// { id: 'workPrevious', dataTarget: data[0].timeframes[target].previous },
// ];
// itsms.forEach(update => updateSpanText(update.id, update.dataTarget));
//     } catch (err) {
//         console.error(err)
//     }
// };
function updateSpanText(id, value) {
    var element = document.getElementById(id);
    if (element) {
        element.innerText = value.toString();
    }
    else {
        console.error("Element with ID ".concat(id, " not found."));
    }
}
