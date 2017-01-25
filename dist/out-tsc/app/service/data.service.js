var DataService = (function () {
    function DataService() {
        this.data = [];
    }
    DataService.prototype.addData = function (input) {
        this.data.push(input);
    };
    DataService.prototype.getData = function () {
        return this.data;
    };
    return DataService;
}());
export { DataService };
//# sourceMappingURL=../../../../src/app/service/data.service.js.map