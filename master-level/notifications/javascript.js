// _________________________Notifications________________________
"use strict";
if (!('Notification' in window)) {
    console.log("Notification no esta disponible...");
}
// - Notification.requestPermission() -> .
Notification.requestPermission(() => {
    // - Notification.permission -> Es el valor (default (Preguntar), denied (Bloquear), granted (Permitir)).
    if (Notification.permission == "granted") {
        console.log("Solicitud de permiso de notificaciones autorisado...");
        // - Notification.(msg, options) -> .
        new Notification("Primera Notification...", {
            body: "Body",
            icon: './icon.png'
        });
    } else if (Notification.permission == "denied") {
        console.log("Solicitud de permiso de notificaciones denegado...");
    }
});