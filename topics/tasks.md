# Task topics

A task topic describes a procedure, or in some cases, [another task](https://everypageispageone.com/2012/08/07/a-task-is-not-a-procedure/), particularly for developer documentation. 

Procedures should be concise and focused. Procedures with multiple subtasks or multiple steps may leave your readers confused, and they may look elsewhere for the solution to your problem. 

The key to writing readable, focused instructions is to ensure that they have everything the _user_ needs; in other words, only include the essential information. Instructions are user-focused, not writer-focused. 

## Topic structure

The code block below contains the structure for a typical task topic:

```xml
<task id="task">
    <title></title>
    <shortdesc></shortdesc>
    <taskbody>
        <context>
            <p></p>
        </context>
        <steps>
            <step>
                <cmd></cmd>
                <info></info>
            </step>
        </steps>
    </taskbody>
</task>
```

| Task element | Description |
| :------------ | :----------- |
| `title`  | All topics require a title.|
| `shortdesc` | The short description is a 1 - 2 sentence description of the topic's purpose.|
| `taskbody` | The task body forms the main body of the task topic. |
| `context` | The `<context>` element provides background information about the task. This might include the task's learning objectives or why the task is necessary. |
| `steps` | The `<steps>` element contains the steps for a task. Depending on your needs, the steps can be ordered or unordered.| 
| `cmd` | The `<cmd>` element is where you write the step the user must complete.| 
| `info` | The `<info>` element allows you to provide additional information about the step. | 


## Writing principles

* Write your commands in the imperative mood—for example, "Create a new Vue project" or "Add Flexbox to the layout."
* Keep your headings short and to the point. 

## Tips and tricks

* Draft a list of learning objectives and user goals to guide you as you write procedures. Knowing what your users want to accomplish helps to inform your writing.
* Avoid using multiple substeps for your instructions. Although popular XML editors like oXygen XML Editor allow you to use a `<substep>` element, you should use it sparingly. Writing multiple substeps for one step often indicates that you need to add more steps.
* Don't gloss over the `<shortdesc>`. The `<shortdesc>` is often used for previews and link summaries. The `<shortdesc>` often appears first in a Google search, so make sure it accurately captures the task's purpose.

