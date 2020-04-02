import paper from 'paper';
import { colors } from '../colors';

let leftToolMenuPosition: paper.Point;
let leftToolMenu: paper.Group;
const leftToolMenuIconHeight = 50;

export function createLeftMenu() {
  leftToolMenu = new paper.Group();
  leftToolMenu.applyMatrix = false;
  leftToolMenu.position = [30, 0];

  const leftToolMenuBacking = new paper.Path();
  leftToolMenuBacking.strokeColor = colors.paper.color;
  leftToolMenuBacking.strokeWidth = 120;
  leftToolMenuBacking.strokeCap = 'round';
  leftToolMenuBacking.segments = [
    new paper.Point(-30, -0),
    new paper.Point(-30, 480),
  ];
  leftToolMenu.addChild(leftToolMenuBacking);

  leftToolMenuPosition = new paper.Point(0, 100);

  // add gap
  leftToolMenuPosition.y += 60;
}

export function addToLeftToolMenu(icon?: any) {
  if (icon == null) {
    //      // create spacer
    //      icon = new paper.Path.Rectangle(0, 0, 40, 2);
    //      icon.fillColor = colors.lightText.color;
    //      icon.position = leftToolMenuPosition - new paper.Point(0, leftToolMenuIconHeight / 4);
    //      leftToolMenu.addChild(icon);
    leftToolMenuPosition.y += leftToolMenuIconHeight / 2;
    return;
  }

  icon.position = leftToolMenuPosition;
  leftToolMenu.addChild(icon);
  leftToolMenuPosition.y += leftToolMenuIconHeight;
}