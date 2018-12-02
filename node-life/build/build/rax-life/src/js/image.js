/**
 * @author CaMnter
 */

import { createElement, render, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

const image = {
  uri: 'https://camo.githubusercontent.com/27b9253de7b03a5e69a7c07b0bc1950c4976a5c2/68747470733a2f2f67772e616c6963646e2e636f6d2f4c312f3436312f312f343031333762363461623733613132336537386438323436636438316338333739333538633939395f343030783430302e6a7067'
};

const image2 = {
  uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png'
};

const base64Image = {
  uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
};

const gifImage = {
  uri: 'http://storage.slide.news.sina.com.cn/slidenews/77_ori/2016_34/74766_703038_567223.gif'
};

const styles = {
  root: {
    width: 750,
    paddingTop: 20
  },
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  baseImage: {
    width: 100,
    height: 100
  }
};

class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text>GIF</Text>
          <Image
            style={{
              height: 200,
              width: 350
            }}
            source={gifImage}
          />
        </View>
        <View style={styles.container}>
          <Text>圆角</Text>
          <Image source={image2} style={[styles.baseImage, {
            borderRadius: 200
          }]}
          />
        </View>
        <View style={styles.container}>
          <Text>内部包含子元素</Text>

          <Image source={image} style={[styles.baseImage, {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }]}>
            <Text style={{
              marginLeft: 30,
              marginTop: 30,
              color: 'black'
            }}>Rax</Text>
          </Image>
        </View>
        <View style={styles.container}>
          <Text>Resize Mode</Text>

          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              margin: 10,
              borderColor: 'red'
            }}
            resizeMode={Image.resizeMode.contain}
            source={image}
          />

          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              margin: 10,
              borderColor: 'red'
            }}
            resizeMode={Image.resizeMode.cover}
            source={image}
          />

          <Image
            style={{
              width: 100,
              height: 100,
              borderWidth: 1,
              margin: 10,
              borderColor: 'red'
            }}
            resizeMode={Image.resizeMode.stretch}
            source={image}
          />

        </View>
      </View>
    );
  }
}

module.exports = ImageComponent;