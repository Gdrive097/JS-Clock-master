#include<stdio.h>
main()
{
	int a;
	int b;
	int c;
	
	printf("A :");
	scanf("%d",&a);
	printf("B :");
	scanf("%d",&b);
	printf("C :");
	scanf("%d",&c);
	
	
	a>b ? ( (a>c)? printf("A is big") : printf("C is big")) 
	        
	    : ( (b>c)? printf("B is big") : printf("C is big"));
	    
           	    
}
