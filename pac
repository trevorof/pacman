// APSC 143 Engineering Programming Project Starter Code
// Feel free to change anything about this file, but do not remove "#include "colours.h".

// Make sure to include all relevant libraries
#include <stdio.h>
#include "colours.h"
#include <math.h>
#include <stdlib.h>
#include <conio.h>

// You don't need to use these, but they help make your code look more organized
#define PACMAN 'P'
#define GHOST 'G'
#define DOT '.'
#define WALL 'W'
#define EMPTY ' '
#define UP 'w'
#define LEFT 'a'
#define DOWN 's'
#define RIGHT 'd'

int pacmanRowPosition = 5;
int pacmanColumnPosition = 5;
int dot = 52;
int winDot;
// Below are the required functions for this program, but you will need to create your own as well.
// Make sure to specify the required parameters, if any.

int winCheck(){
    if(dot == 0){
        return 1;
    }
    else{
        return 0;
    }
}

int loseCheck(/*parameters*/){
    return 0;
}


void ghostMove();





void readMap(char **map) {
    char temp;
    FILE *fp;
    fp = fopen("map.txt", "r");
    for(int i=1; i<10; i++){
        for (int k = 1; k < 10; k++){
            fscanf(fp, "%c", &temp);
            if(temp ==' '|| temp =='\n'){
                k--;
            }
            else{
                map[i][k] = temp;
            }
        }
    }
    for (int i=0; i<10; i++) {
        map[0][i] = 'W';
    }
    for (int i=0; i<10; i++) {
        map[10][i] = 'W';
    }
    for (int i=0; i<10; i++) {
        map[i][0] = 'W';
    }
    for (int i=0; i<11; i++) {
        map[i][10] = 'W';
    }

}

void printMap(char **map){
    for(int i =0; i<11; i++){
        for (int k =0; k<11; k++){
            printf("%c  ", map[i][k]);
        }
        printf("\n");
    }
}
int pacLoc(char **map){
    int temp = 0;
    int counter = 0;
    for (int i = 0; i < 11; ++i) {
        for (int k = 0; k < 11; ++k) {
            if(map[i][k] == 'P'){
                temp = counter;
            }
            else{
                counter++;
            }
        }
    }
    return temp;
}

char isWall(int x, int y, char **map){
    if (map[x][y] == WALL){
        return 1;
    }
    else {
        return 0;
    }
}

int main() {

    char **mapArray = (char **) malloc(11 * sizeof(char*));
    for (int i = 0; i < 11; ++i) {
        mapArray[i] = (char *) malloc(11 * sizeof(char));
    }
    readMap(mapArray);
    printMap(mapArray);
    char movement;

    while(1) {
        if (winCheck() == 1) {
            break;
        }
        else {
            movement = getch();
            printf("%d", dot);
            if (movement == RIGHT) {
                if (isWall(pacmanRowPosition, pacmanColumnPosition + 1, mapArray) == 1) {
                } else {
                    if (mapArray[pacmanRowPosition][pacmanColumnPosition + 1] == DOT) {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanColumnPosition++;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                        dot--;
                    } else {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanColumnPosition++;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                    }
                }
            }

            if (movement == UP) {
                if (isWall(pacmanRowPosition - 1, pacmanColumnPosition, mapArray) == 1) {

                } else {
                    if (mapArray[pacmanRowPosition - 1][pacmanColumnPosition] == DOT) {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanRowPosition--;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                        dot--;
                    } else {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanRowPosition--;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                    }
                }
            }

            if (movement == LEFT) {
                if (isWall(pacmanRowPosition, pacmanColumnPosition - 1, mapArray) == 1) {

                } else {
                    if (mapArray[pacmanRowPosition][pacmanColumnPosition - 1] == DOT) {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanColumnPosition--;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                        dot--;
                    } else {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanColumnPosition--;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                    }
                }
            }

            if (movement == DOWN) {
                if (isWall(pacmanRowPosition + 1, pacmanColumnPosition, mapArray) == 1) {

                } else {
                    if (mapArray[pacmanRowPosition + 1][pacmanColumnPosition] == DOT) {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanRowPosition++;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                        dot--;
                    } else {
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = ' ';
                        pacmanRowPosition++;
                        mapArray[pacmanRowPosition][pacmanColumnPosition] = 'P';
                        printMap(mapArray);
                        printf("\n");
                    }
                }
            }
        }
    }
    printf("WIN");
}






//int posX(char **map){
//    int x = 0;
//    x = (pacLoc(map) % 11) + 1;
//    return x;
//}
//
//int posY(char **map){
//    int y = 0;
//    y = ceil((pacLoc(map)-posX(map))/11 + 2);
//    return y;
//}

