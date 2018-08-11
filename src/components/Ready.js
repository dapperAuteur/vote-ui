import React from 'react';

const Ready = (props) => {
    console.log(props);
    if (props) {
        this.props.history.push('/questions/es');
        return (
            <div>
                loading
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
      i: state.voterReducer.i,
      language: state.voterReducer.language,
      languages: state.voterReducer.languages,
      questions: state.voterReducer.questions,
      questionsEng: state.voterReducer.questionsEng,
      questionsEsp: state.voterReducer.questionsEsp,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      setQuestions: (questions) => dispatch(actions.setQuestions(questions)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Ready);