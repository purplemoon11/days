// enum NotificationType{
//     Error,
//     Success,
//     Warning
// };
// const error:NotificationType = NotificationType.Error;
// console.log(NotificationType.Error)
//enum with value inside it
var NotificationType;
(function (NotificationType) {
    NotificationType["Error"] = "error";
    NotificationType["Success"] = "success";
    NotificationType["Warning"] = "warning";
})(NotificationType || (NotificationType = {}));
;
var error = NotificationType.Error;
