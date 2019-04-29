##  12 FACTOR-APP :

 **12 FACTOR-APP** application concept is useful in Writing of application codes, most of the cloud solutions lots of **application programmers** are used this concept nowadays. So in order to write modern applications in a effective  way, There is a methodology that we have to follow called ***12 factor application***.

 #### Principle I. Codebase :
“One codebase tracked used for many deploys”
Your codebase should have an easy to understand and it must support logical **"Version Control System"**.Its own repository is helpful for every deployment to multiple environments. Avoid using multiple applications into the same repository because it makes almost impossible to understand.

#### Principle II. Dependencies :
“Application features does not depend on implicit system packages”.
Never rely on implicit exiting system packages. It just make sure that application-specific libraries are available. There is no guarantee **System libraries** will exist on all systems where the application may run in the future. Management of **dependencies** should be done within the application and not from an external source. These dependencies should be hosted in a repository within the app. App must not affected by conflicting libraries that might be installed on the host machine.

#### Principle III. Config :
“Store config in the file”.
An application should be completely independent from its configuration, as storing of configuration in a code should be fully automated. **Configs** should have separate file of their own and not stored within the code repository. Most important point is that a separate config file makes it easy to update the config values without touching the actual code base.
 In simply means that **configs** belong in the environment as variables, not in the application. Most of the developers achieve this goal by creating configuration files.

 #### Principle IV. Backing Services :
“Treat backing services as attached resources”.
In an application any **services** that are not part of the core application such as database or external storage. This services should be accessed as a service — via an HTTP or any other protocol, so that the source of the service can be changed without affecting the core code of the application.

#### Principle V. Build, release, run :
“Separate build and run stages”.
Most important point to be consider as **application** needs to be stored in source repository, then built all of its services and that are not part of the core application. That’s your build process. Separating configuration information as well. Before releasing the application, It is important that application must be in running stage.

#### Principle VI. Processes :
“Execute the app as one or more stateless processes”.
Any data that is important such as transaction details so this details must be stored in a service, like **databases**. The idea is that the process is stateless and shares absolutely nothing. most of the developers are used to **“sticky”** sessions, storing information in the session because next request will come to the same server, this will follow the **12 factor app methodology**.

#### Principle VII. Port Binding Principle :
“Export services via port binding”.
Different functionalities are handled by different processes, its easy to make the **connection** because these functionalities should be available via a **protocol** such as HTTP, FTP etc. So its common for applications to be run behind web servers such as Apache or Tomcat. Every function should be in its own process, isolated from everything else.

#### Principle VIII. Concurrency :
“Scale an app for serving more number users”.
While developing an app that application is **scalable application**. Application should be built in such a way that it serves more number of user at a time, Scaling of an applications done in the cloud seamlessly. By developing the app to be concurrent, new instances can be created in the cloud effortlessly. That means that in order to add more capacity, thats how application able to serve more clients.

#### Principle IX. Disposability :
 Building **disposability** in the app makes sure that when the app shuts down it does so in a peaceful manner. It should be able to clean up all the resources it was utilizing earlier, hence shut-down **peacefully** means without any problems. Likewise, when user comes back again, user must receive response very fast. Likewise, it means that when processes terminate, they should be able to finish their current request and refuse any incoming request and exit.

#### Principle X. Dev/prod parity :
“Keep development, staging, and production as similar as possible”.
 It is important that you should develop **new versions** of the application because the recent backing services may occur issues in future because of upgradation in technology so that developing new version makes your application compatible with latest technology.

#### Principle XI. Logs :
“Treat logs as event streams”.
Most of the application that store log information in a file, This 12 factor principle directs that logs should be **streamed** to stdout and not just dumped into a log file.
The logs should be streamed into a common place, because when the application crashes, the logs might be destroy thats to maintain this log file at common place.

#### Principle XII. Admin Processes :
“Run admin/management tasks as one-off processes”.
An application must still be run in the same environment and  same base code. This priciple states that all the admin tasks such as **migrating a database** or **inspecting records** from the appliaction.