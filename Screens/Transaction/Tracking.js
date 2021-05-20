import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {colors} from '../../Config/Theme';
import dummyData from './data';
import HeaderwithoutMenu from '../../Components/HeaderwithoutMenu';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: colors.Primary,
  separatorFinishedColor: colors.Primary,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: colors.Primary,
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: colors.Primary,
};

export default function VerticalStepIndicator() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const viewabilityConfig = React.useRef({itemVisiblePercentThreshold: 40})
    .current;

  const renderPage = rowData => {
    const item = rowData.item;
    return <Text></Text>;
  };
  const labels = ['Ordered', 'Packed', 'Shipped', 'Delivered'];
  const onViewableItemsChanged = React.useCallback(({viewableItems}) => {
    // alert(viewableItems)
    const visibleItemsCount = viewableItems.length;
    if (visibleItemsCount !== 0) {
      setCurrentPage(viewableItems[visibleItemsCount - 1].index);
    }
  }, []);
  const renderStepIndicator = params => <View></View>;
  const renderLabel = ({position, label, currentPosition}) => {
    return (
      <View style={{          flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'column',
          marginTop: 40,
          justifyContent: 'center',
        }}>
        <Text style={{fontFamily: 'Poppins-SemiBold'}}>{label.title}</Text>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: colors.ash}}>
          {' '}
          {label.text}
        </Text>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: colors.ash}}>
          {' '}
          {label.Details}
        </Text>
      </View></View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderwithoutMenu item={{Title: 'Tracking Details'}} />

      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={4}
            direction="vertical"
            currentPosition={currentPage}
            renderStepIndicator={renderStepIndicator}
            renderLabel={renderLabel}
            onViewableItemsChanged={onViewableItemsChanged}
            labels={dummyData.data.map(item => item)}
          />
        </View>
        <FlatList
          style={{flexGrow: 1}}
          data={dummyData.data}
          renderItem={renderPage}
          onViewableItemsChanged={onViewableItemsChanged}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
});
