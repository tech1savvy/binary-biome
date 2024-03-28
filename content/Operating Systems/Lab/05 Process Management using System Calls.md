---
modified_time: 22-03-24, 12:07
tags:
  - sem04/cse325
---
# Exercise
> 1. Write a C program to illustrate that performing 'n' consecutive `fork()` system calls generates a total of $2^n-1$ child processes. The program should prompt the user to input the value of 'n'.
```c
#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>

int main(){
	int n;
	printf("enter n: ");
	scanf("%d",&n);
	
	for(int i=0;i<n;i++){
		pid_t x = fork();
		if(x ==0)
			printf("child pid: %d and parrent ppid: %d\n",getpid(),getppid());
	}
}
```
> 2. Write a C program utilizing the `fork()` system call to generate the following process hierarchy: `P1->P2->P3`. The program should display the Process ID and Parent Process ID for each process created.
```c
#include <stdio.h>
#include <unistd.h>

int main(){
	pid_t p1, p2, p3;
	p1 = fork();
	if(p1 == 0){
			printf("p1 pid: %d ppid: %d\n",getpid(), getppid());
			p2 = fork();
			if(p2 == 0){
					printf("p2 pid: %d ppid: %d\n",getpid(), getppid());
					p3 = fork();
					if(p3 == 0){
							printf("p3 pid: %d ppid: %d\n",getpid(), getppid());
					}
			}
	}
	return 0;
}
```
> 3. Write a C program to generate a process hierarchy as follows and and also print the PID and PPID of each process.
```
P1 -> P2 -> P4 -> P5
P1 -> P3
```

```c
#include<stdio.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/wait.h>


int main(){
	pid_t  p1, p2, p3, p4, p5;
	p1 = fork();
	if(p1==0){
		printf("p1 pid: %d and ppid: %d\n",getpid(),getppid());
		p2 = fork();
		if(p2==0){
			printf("p2 pid: %d and ppid: %d\n",getpid(),getppid());
			p4 = fork();
			if(p4 == 0){
				printf("p4 pid: %d and ppid: %d\n",getpid(),getppid());
				p5 = fork();
				if(p5==0){
						printf("p5 pid: %d and ppid: %d\n",getpid(),getppid());
						return 0;
				}
				wait(NULL);
				return 0;
			}
			wait(NULL);
			return 0;
		}
		p3 = fork();
		if(p3==0){
			printf("p3 pid: %d and ppid: %d\n",getpid(),getppid());
			return 0;
		}
		wait(NULL);
		return 0;
	}
	return 0;
}
```