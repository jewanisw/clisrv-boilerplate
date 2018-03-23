import React, {Component} from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>APP</title>
          <meta name="description" content="APP" />
        </Helmet>
        <div className="content">
          <div>
            Integer commodo auctor feugiat.
            Nunc finibus pellentesque ante.
            Aliquam ultrices ornare tellus, at dictum mauris.
            Pellentesque mattis auctor maximus.
            Proin sed rutrum ex, ut interdum ligula.
            Mauris et lobortis lacus, eu hendrerit nunc.
            Mauris eget sapien sit amet metus aliquet suscipit.
            Vivamus rhoncus euismod dignissim.
            Mauris nec condimentum purus.
            Donec non est at justo iaculis tincidunt.
            Integer tristique nulla sem, dapibus venenatis urna posuere vel.
            Praesent sit amet justo viverra, pellentesque felis ac, dapibus tellus.
          </div>
          <div>
            Mauris metus velit, rutrum ut ipsum non, lacinia cursus ex.
            Curabitur vestibulum purus in lorem tempor, molestie finibus dui aliquam.
            Donec non vestibulum ligula.
            Proin lobortis, risus eget ullamcorper pharetra, libero neque tincidunt odio, id hendrerit lectus tortor in lorem.
            Pellentesque consectetur metus in nisl accumsan pretium.
            Vivamus molestie elementum est, viverra rhoncus justo mattis sed.
            Nam ut faucibus mauris.
            Curabitur non lorem in mauris vehicula condimentum et nec enim.
          </div>
          <div>
            Aliquam dapibus mi a ante consectetur, sed interdum eros tempor.
            Nam vestibulum accumsan porttitor.
            Ut tempor tempus nunc, vel tincidunt velit ullamcorper ut.
            Mauris ut efficitur enim.
            Nunc posuere vulputate lectus vitae lacinia.
            Mauris malesuada eleifend dolor, quis vestibulum magna egestas vitae.
            Donec sed nibh a augue pretium suscipit in vel lacus.
            Aenean sollicitudin lacus a leo fermentum dapibus.
            Duis diam libero, aliquam eu ligula eu, elementum rutrum nunc.
            Aliquam laoreet vehicula dui, non ornare augue condimentum vel.
            Nullam orci elit, consequat id pellentesque quis, volutpat eget elit.
            Mauris ultrices consequat faucibus.
            Integer eu purus eu sem porta semper.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quisque lacus dui, gravida nec eleifend id, vestibulum ut orci.
            Sed sit amet neque velit.
            Aenean vulputate, purus et elementum varius, dolor lorem tincidunt magna, ac condimentum nibh arcu ut nibh.
            In erat magna, congue non nisi sed, tempor varius turpis.
            Curabitur finibus erat suscipit magna varius rhoncus.
            Morbi porta ullamcorper massa, ut euismod augue rhoncus at.
            Integer a odio laoreet, hendrerit velit eget, dignissim metus.
            Aliquam eget placerat risus.
            Donec faucibus quam sit amet dolor semper ornare.
            Vestibulum et orci ipsum.
            Donec felis eros, facilisis vel nisl eget, commodo ornare ipsum.
            Maecenas ultricies ipsum tellus, maximus feugiat est molestie at.
          </div>
          <div>
            Cras ullamcorper sem at ligula ornare, non sagittis erat accumsan.
            Aliquam efficitur velit sed rutrum commodo.
            Maecenas mattis egestas lacus at dignissim.
            Nunc placerat mollis velit nec convallis.
            Nulla pellentesque neque enim, sed sollicitudin nisi cursus vel.
            Integer porta felis luctus, fringilla ante eget, accumsan urna.
            Nullam ullamcorper quam eget nunc iaculis, at congue nibh facilisis.
            Nulla viverra ex lectus, ut dignissim sem sodales at.
            Praesent in malesuada magna, quis ornare lorem.
          </div>
          <div>
            Pellentesque accumsan vel velit tincidunt eleifend.
            Aenean pulvinar lectus id ullamcorper sagittis.
            Mauris vitae tempor tortor, id venenatis neque.
            Duis arcu lectus, fringilla eu volutpat ac, consectetur non lectus.
            Fusce eget ultricies lacus.
            Vivamus posuere tincidunt turpis sit amet gravida.
            Praesent odio neque, blandit vel massa at, tincidunt efficitur sem.
            Cras mi ante, accumsan a sem sed, tempus pellentesque risus.
            Duis fermentum nisi et laoreet porttitor.
            Quisque a porta dolor.
            Vivamus finibus, tellus sed tincidunt tristique, leo sem aliquam lectus, sit amet venenatis lorem nibh at justo.
            Aenean ipsum mauris, tristique accumsan blandit quis, eleifend a erat.
            Donec in dui elit.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sed urna ut neque pulvinar varius quis quis tortor.
            Donec purus lacus, vulputate vel consequat a, faucibus quis lectus.
          </div>
          <div>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Sed eget enim hendrerit, varius leo in, pellentesque erat.
            Cras consectetur urna a enim vehicula, ut vestibulum purus mollis.
            Phasellus pharetra facilisis varius.
            Nam iaculis convallis sollicitudin.
            Sed non aliquet turpis, ut vulputate ligula.
            Donec non massa eget velit posuere ornare in sed libero.
            Integer gravida ligula magna, id volutpat lectus lobortis nec.
            Fusce faucibus id augue tincidunt vehicula.
            Fusce dictum consectetur nisi, non mattis mi consectetur a.
            Quisque ut mauris euismod, imperdiet tellus id, porta metus.
          </div>
          <div>
            Pellentesque in libero a nisl pretium mattis.
            Morbi pulvinar ante sit amet volutpat faucibus.
            Donec ut quam aliquam, vehicula diam a, elementum est.
            Mauris congue nibh non lacus commodo ullamcorper.
            Nunc ligula dolor, mollis vestibulum elementum sit amet, aliquet vel dolor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam aliquet id sem ut blandit.
            Curabitur semper felis vel orci maximus, id malesuada nunc faucibus.
            Maecenas at interdum purus.
          </div>
          <div>
            Aenean ac diam faucibus, fermentum orci pharetra, sollicitudin eros.
            Praesent odio dolor, dapibus id mauris vel, aliquet fringilla risus.
            Ut dignissim id leo at gravida.
            Maecenas lacinia mattis massa sed gravida.
            Cras gravida tincidunt metus, quis ornare mauris dignissim sed.
            Proin purus velit, suscipit ac nisl eget, porta porta ante.
            Donec porta arcu quis enim facilisis, eget tincidunt odio blandit.
            Pellentesque vestibulum lorem eu elementum ornare.
            Fusce at gravida ipsum.
            Donec sed orci leo.
            Sed sit amet purus consectetur, tincidunt urna at, faucibus sem.
            Aenean id lacus est.
            Praesent efficitur vitae magna sed efficitur.
            Maecenas ullamcorper dolor sodales est vulputate viverra.
            Quisque consectetur tortor vitae eleifend tincidunt.
          </div>
          <div>
            Maecenas accumsan tellus rhoncus, mattis arcu eget, maximus nibh.
            Morbi pharetra leo nec orci volutpat pellentesque at id dui.
            Sed tempor accumsan tempus.
            Quisque dictum lorem et laoreet vulputate.
            Duis tristique fringilla diam et sodales.
            Vivamus vestibulum lacus non odio mattis ultrices.
            Maecenas convallis porta nisl et faucibus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec metus tortor, pharetra aliquam eros quis, rhoncus cursus est.
            Nullam feugiat tristique magna.
            Fusce diam erat, faucibus et molestie quis, tristique id diam.
            Nam semper, ante et gravida lacinia, purus justo dignissim enim, ac aliquet magna dui quis est.
            Suspendisse potenti.
            Aliquam a tempus massa.
          </div>
          <div>
            Nunc eu arcu elementum, pulvinar odio eu, elementum lorem.
            Proin pharetra lacinia quam sed accumsan.
            Donec vulputate sem ac ipsum accumsan facilisis.
            Nulla turpis dolor, scelerisque eu vehicula at, porttitor in mauris.
            Ut sit amet tortor augue.
            Cras finibus ornare sapien non tincidunt.
            Vivamus eros dui, pellentesque sed aliquam elementum, efficitur sed ex.
          </div>
          <div>
            Aenean euismod est sit amet finibus porta.
            Sed auctor massa a sapien maximus efficitur.
            Nam consectetur non elit sit amet tincidunt.
            Cras vitae posuere enim.
            Suspendisse elit orci, egestas id vulputate vitae, maximus ut sem.
            Mauris nec fringilla mi, ac tincidunt velit.
            Proin accumsan ut orci nec finibus.
            Vivamus in aliquam diam.
            Suspendisse potenti.
            Cras volutpat imperdiet tincidunt.
            Sed sed dapibus nunc, quis vulputate elit.
            Mauris eget massa non odio imperdiet molestie a quis quam.
            Morbi laoreet orci ut magna placerat lobortis.
            Cras tempor, augue vel consequat ultrices, nibh ante vehicula magna, at rutrum ex magna pulvinar ante.
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    message: state.app.message,
  };
};

export default connect(mapStateToProps)(Home);
