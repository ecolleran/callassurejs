Changelog
[Unreleased]
Added
Introduced Root and App as base components to structure the hierarchy.
Added the Main (Registration) component with a child component MainList (stateless).

[Feature 4]
Added
Implemented MessageLogs and Settings components as siblings to the Main (Registration) component.
Added MessageList as a child of MessageLogs.
Enhanced the structure to accommodate a more modular approach.

[Feature 5]
Added
Added ProtectedRoutes to manage route access.
Integrated the Auth component for user authentication.
Introduced AuthRegister and AuthLogin components under Auth.
Implemented AuthForm as a shared child of both AuthRegister and AuthLogin.
Added MainGood as a stateless child of Main (Registration).


[Feature 6]
deployed app to dev and production servers with hosting on call-assure.com
merged existing python/flask code with javascript (user settings and sending API for texting)
Users are now able to edit settings and check-in times via settings portal (used a parse cloud function to webhook to a flask endpoint)

