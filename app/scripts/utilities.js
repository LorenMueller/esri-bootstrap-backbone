define(
    [],
    function () {
        var utils = {};
        utils.ShowMapLoading = function () {
            $("#mapLoadingImg").show();
        };
        utils.HideMapLoading = function () {
            $("#mapLoadingImg").hide();
        };
        utils.ShowIdWorking = function () {
            $("#idWorkingImg").show();
        };
        utils.HideIdWorking = function () {
            $("#idWorkingImg").hide();
        };
        return utils;
    }
);