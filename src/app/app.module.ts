import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RESTAPIModule } from '@plone/restapi-angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatListModule,
  MatIconModule
} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PastanagaLoginComponent } from './pastanaga-login/pastanaga-login.component';
import { PastanagaEditDocumentComponent } from './pastanaga-edit-document/pastanaga-edit-document.component';
import { PastanagaHomeComponent } from './pastanaga-home/pastanaga-home.component';
import { PastanagaToolbarComponent } from './pastanaga-toolbar/pastanaga-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PastanagaLoginComponent,
    PastanagaEditDocumentComponent,
    PastanagaHomeComponent,
    PastanagaToolbarComponent
  ],
  entryComponents: [
    PastanagaHomeComponent,
    PastanagaLoginComponent,
    PastanagaEditDocumentComponent,
  ],
  imports: [
    BrowserModule,
    RESTAPIModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    {
      provide: 'CONFIGURATION', useValue: {
        BACKEND_URL: environment.backendUrl,
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('accessibility', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/accessibility.svg'));
    iconRegistry.addSvgIcon('accessible', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/accessible.svg'));
    iconRegistry.addSvgIcon('add-document', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/add-document.svg'));
    iconRegistry.addSvgIcon('add-on', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/add-on.svg'));
    iconRegistry.addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/add.svg'));
    iconRegistry.addSvgIcon('ahead', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/ahead.svg'));
    iconRegistry.addSvgIcon('alarm', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/alarm.svg'));
    iconRegistry.addSvgIcon('alert', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/alert.svg'));
    iconRegistry.addSvgIcon('align-center', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/align-center.svg'));
    iconRegistry.addSvgIcon('align-justify', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/align-justify.svg'));
    iconRegistry.addSvgIcon('align-left', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/align-left.svg'));
    iconRegistry.addSvgIcon('align-right', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/align-right.svg'));
    iconRegistry.addSvgIcon('application', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/application.svg'));
    iconRegistry.addSvgIcon('apps', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/apps.svg'));
    iconRegistry.addSvgIcon('attachment', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/attachment.svg'));
    iconRegistry.addSvgIcon('audio', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/audio.svg'));
    iconRegistry.addSvgIcon('back-down', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/back-down.svg'));
    iconRegistry.addSvgIcon('back', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/back.svg'));
    iconRegistry.addSvgIcon('backspace-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/backspace-key.svg'));
    iconRegistry.addSvgIcon('backspace', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/backspace.svg'));
    iconRegistry.addSvgIcon('beginning', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/beginning.svg'));
    iconRegistry.addSvgIcon('bell-ringing', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/bell-ringing.svg'));
    iconRegistry.addSvgIcon('bell', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/bell.svg'));
    iconRegistry.addSvgIcon('binder', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/binder.svg'));
    iconRegistry.addSvgIcon('blank', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/blank.svg'));
    iconRegistry.addSvgIcon('block', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/block.svg'));
    iconRegistry.addSvgIcon('blog-entry', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/blog-entry.svg'));
    iconRegistry.addSvgIcon('blog', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/blog.svg'));
    iconRegistry.addSvgIcon('bold', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/bold.svg'));
    iconRegistry.addSvgIcon('book', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/book.svg'));
    iconRegistry.addSvgIcon('bookmark', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/bookmark.svg'));
    iconRegistry.addSvgIcon('border-style', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/border-style.svg'));
    iconRegistry.addSvgIcon('border-width', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/border-width.svg'));
    iconRegistry.addSvgIcon('briefcase', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/briefcase.svg'));
    iconRegistry.addSvgIcon('calendar', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/calendar.svg'));
    iconRegistry.addSvgIcon('camera', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/camera.svg'));
    iconRegistry.addSvgIcon('cap-locks-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/cap-locks-key.svg'));
    iconRegistry.addSvgIcon('caps-lock', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/caps-lock.svg'));
    iconRegistry.addSvgIcon('caution', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/caution.svg'));
    iconRegistry.addSvgIcon('cd', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/cd.svg'));
    iconRegistry.addSvgIcon('cell', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/cell.svg'));
    iconRegistry.addSvgIcon('check', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/check.svg'));
    iconRegistry.addSvgIcon('checkbox-checked', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/checkbox-checked.svg'));
    iconRegistry.addSvgIcon('checkbox-disabled', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/checkbox-disabled.svg'));
    iconRegistry.addSvgIcon('checkbox-indeterminate', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/checkbox-indeterminate.svg'));
    iconRegistry.addSvgIcon('checkbox-unchecked', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/checkbox-unchecked.svg'));
    iconRegistry.addSvgIcon('chrono', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/chrono.svg'));
    iconRegistry.addSvgIcon('circle-bottom', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-bottom.svg'));
    iconRegistry.addSvgIcon('circle-dismiss', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-dismiss.svg'));
    iconRegistry.addSvgIcon('circle-left', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-left.svg'));
    iconRegistry.addSvgIcon('circle-menu', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-menu.svg'));
    iconRegistry.addSvgIcon('circle-minus', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-minus.svg'));
    iconRegistry.addSvgIcon('circle-plus', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-plus.svg'));
    iconRegistry.addSvgIcon('circle-right', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-right.svg'));
    iconRegistry.addSvgIcon('circle-top', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/circle-top.svg'));
    iconRegistry.addSvgIcon('clean', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/clean.svg'));
    iconRegistry.addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/clear.svg'));
    iconRegistry.addSvgIcon('clock', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/clock.svg'));
    iconRegistry.addSvgIcon('cloud', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/cloud.svg'));
    iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/code.svg'));
    iconRegistry.addSvgIcon('collapse-down', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/collapse-down.svg'));
    iconRegistry.addSvgIcon('collapse-up', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/collapse-up.svg'));
    iconRegistry.addSvgIcon('collection', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/collection.svg'));
    iconRegistry.addSvgIcon('column', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/column.svg'));
    iconRegistry.addSvgIcon('command', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/command.svg'));
    iconRegistry.addSvgIcon('comment', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/comment.svg'));
    iconRegistry.addSvgIcon('compare-down', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/compare-down.svg'));
    iconRegistry.addSvgIcon('compare-up', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/compare-up.svg'));
    iconRegistry.addSvgIcon('compare', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/compare.svg'));
    iconRegistry.addSvgIcon('computer', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/computer.svg'));
    iconRegistry.addSvgIcon('configuration-app', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/configuration-app.svg'));
    iconRegistry.addSvgIcon('configuration', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/configuration.svg'));
    iconRegistry.addSvgIcon('connector', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/connector.svg'));
    iconRegistry.addSvgIcon('console', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/console.svg'));
    iconRegistry.addSvgIcon('content-existing', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/content-existing.svg'));
    iconRegistry.addSvgIcon('content-listing', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/content-listing.svg'));
    iconRegistry.addSvgIcon('content', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/content.svg'));
    iconRegistry.addSvgIcon('copy', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/copy.svg'));
    iconRegistry.addSvgIcon('crown', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/crown.svg'));
    iconRegistry.addSvgIcon('cut', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/cut.svg'));
    iconRegistry.addSvgIcon('delete-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/delete-key.svg'));
    iconRegistry.addSvgIcon('delete', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/delete.svg'));
    iconRegistry.addSvgIcon('delighted', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/delighted.svg'));
    iconRegistry.addSvgIcon('disconnected', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/disconnected.svg'));
    iconRegistry.addSvgIcon('discussion', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/discussion.svg'));
    iconRegistry.addSvgIcon('dissatisfied', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/dissatisfied.svg'));
    iconRegistry.addSvgIcon('dots', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/dots.svg'));
    iconRegistry.addSvgIcon('doument-details', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/doument-details.svg'));
    iconRegistry.addSvgIcon('down-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/down-key.svg'));
    iconRegistry.addSvgIcon('down', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/down.svg'));
    iconRegistry.addSvgIcon('download', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/download.svg'));
    iconRegistry.addSvgIcon('drag', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/drag.svg'));
    iconRegistry.addSvgIcon('editing', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/editing.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/email.svg'));
    iconRegistry.addSvgIcon('end', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/end.svg'));
    iconRegistry.addSvgIcon('enter', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/enter.svg'));
    iconRegistry.addSvgIcon('envelope', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/envelope.svg'));
    iconRegistry.addSvgIcon('ereaser', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/ereaser.svg'));
    iconRegistry.addSvgIcon('error', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/error.svg'));
    iconRegistry.addSvgIcon('event', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/event.svg'));
    iconRegistry.addSvgIcon('exclamation', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/exclamation.svg'));
    iconRegistry.addSvgIcon('fast-forward', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/fast-forward.svg'));
    iconRegistry.addSvgIcon('file', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/file.svg'));
    iconRegistry.addSvgIcon('filter', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/filter.svg'));
    iconRegistry.addSvgIcon('find-replace', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/find-replace.svg'));
    iconRegistry.addSvgIcon('finger-print', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/finger-print.svg'));
    iconRegistry.addSvgIcon('first-aids', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/first-aids.svg'));
    iconRegistry.addSvgIcon('first', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/first.svg'));
    iconRegistry.addSvgIcon('flag', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/flag.svg'));
    iconRegistry.addSvgIcon('flash', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/flash.svg'));
    iconRegistry.addSvgIcon('folder', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/folder.svg'));
    iconRegistry.addSvgIcon('forbidden', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/forbidden.svg'));
    iconRegistry.addSvgIcon('form', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/form.svg'));
    iconRegistry.addSvgIcon('format-clear', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/format-clear.svg'));
    iconRegistry.addSvgIcon('format', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/format.svg'));
    iconRegistry.addSvgIcon('freedom', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/freedom.svg'));
    iconRegistry.addSvgIcon('frustrated', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/frustrated.svg'));
    iconRegistry.addSvgIcon('fullscreen', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/fullscreen.svg'));
    iconRegistry.addSvgIcon('function', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/function.svg'));
    iconRegistry.addSvgIcon('globe', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/globe.svg'));
    iconRegistry.addSvgIcon('group', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/group.svg'));
    iconRegistry.addSvgIcon('guillotina', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/guillotina.svg'));
    iconRegistry.addSvgIcon('half-star', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/half-star.svg'));
    iconRegistry.addSvgIcon('heading', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/heading.svg'));
    iconRegistry.addSvgIcon('headset-microphone', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/headset-microphone.svg'));
    iconRegistry.addSvgIcon('headset', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/headset.svg'));
    iconRegistry.addSvgIcon('heart', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/heart.svg'));
    iconRegistry.addSvgIcon('help', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/help.svg'));
    iconRegistry.addSvgIcon('hide', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/hide.svg'));
    iconRegistry.addSvgIcon('highlighter', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/highlighter.svg'));
    iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/home.svg'));
    iconRegistry.addSvgIcon('horizontal', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/horizontal.svg'));
    iconRegistry.addSvgIcon('image', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/image.svg'));
    iconRegistry.addSvgIcon('images', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/images.svg'));
    iconRegistry.addSvgIcon('inbox', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/inbox.svg'));
    iconRegistry.addSvgIcon('indent', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/indent.svg'));
    iconRegistry.addSvgIcon('info', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/info.svg'));
    iconRegistry.addSvgIcon('interface', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/interface.svg'));
    iconRegistry.addSvgIcon('italic', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/italic.svg'));
    iconRegistry.addSvgIcon('key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/key.svg'));
    iconRegistry.addSvgIcon('keyboard-hide', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/keyboard-hide.svg'));
    iconRegistry.addSvgIcon('keyboard', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/keyboard.svg'));
    iconRegistry.addSvgIcon('language', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/language.svg'));
    iconRegistry.addSvgIcon('laptop', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/laptop.svg'));
    iconRegistry.addSvgIcon('last', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/last.svg'));
    iconRegistry.addSvgIcon('left-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/left-key.svg'));
    iconRegistry.addSvgIcon('link', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/link.svg'));
    iconRegistry.addSvgIcon('list-bullet', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/list-bullet.svg'));
    iconRegistry.addSvgIcon('list-numbered', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/list-numbered.svg'));
    iconRegistry.addSvgIcon('lock-off', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/lock-off.svg'));
    iconRegistry.addSvgIcon('lock', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/lock.svg'));
    iconRegistry.addSvgIcon('log-out', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/log-out.svg'));
    iconRegistry.addSvgIcon('maintenance', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/maintenance.svg'));
    iconRegistry.addSvgIcon('megaphone', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/megaphone.svg'));
    iconRegistry.addSvgIcon('menu', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/menu.svg'));
    iconRegistry.addSvgIcon('microphone-off', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/microphone-off.svg'));
    iconRegistry.addSvgIcon('microphone', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/microphone.svg'));
    iconRegistry.addSvgIcon('mistake', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/mistake.svg'));
    iconRegistry.addSvgIcon('mobile', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/mobile.svg'));
    iconRegistry.addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/more.svg'));
    iconRegistry.addSvgIcon('mouse', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/mouse.svg'));
    iconRegistry.addSvgIcon('move-down', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/move-down.svg'));
    iconRegistry.addSvgIcon('move-first', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/move-first.svg'));
    iconRegistry.addSvgIcon('move-last', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/move-last.svg'));
    iconRegistry.addSvgIcon('move-up', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/move-up.svg'));
    iconRegistry.addSvgIcon('move', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/move.svg'));
    iconRegistry.addSvgIcon('nav', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/nav.svg'));
    iconRegistry.addSvgIcon('navigation', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/navigation.svg'));
    iconRegistry.addSvgIcon('neutral', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/neutral.svg'));
    iconRegistry.addSvgIcon('news', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/news.svg'));
    iconRegistry.addSvgIcon('nib', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/nib.svg'));
    iconRegistry.addSvgIcon('no-entry', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/no-entry.svg'));
    iconRegistry.addSvgIcon('open', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/open.svg'));
    iconRegistry.addSvgIcon('opening', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/opening.svg'));
    iconRegistry.addSvgIcon('option', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/option.svg'));
    iconRegistry.addSvgIcon('outdent', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/outdent.svg'));
    iconRegistry.addSvgIcon('pack', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/pack.svg'));
    iconRegistry.addSvgIcon('page', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/page.svg'));
    iconRegistry.addSvgIcon('paint', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/paint.svg'));
    iconRegistry.addSvgIcon('paste', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/paste.svg'));
    iconRegistry.addSvgIcon('pause', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/pause.svg'));
    iconRegistry.addSvgIcon('payment', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/payment.svg'));
    iconRegistry.addSvgIcon('pen', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/pen.svg'));
    iconRegistry.addSvgIcon('pencil', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/pencil.svg'));
    iconRegistry.addSvgIcon('pending', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/pending.svg'));
    iconRegistry.addSvgIcon('play', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/play.svg'));
    iconRegistry.addSvgIcon('plone', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/plone.svg'));
    iconRegistry.addSvgIcon('printer', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/printer.svg'));
    iconRegistry.addSvgIcon('properties', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/properties.svg'));
    iconRegistry.addSvgIcon('radio-checked', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/radio-checked.svg'));
    iconRegistry.addSvgIcon('radio-disabled', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/radio-disabled.svg'));
    iconRegistry.addSvgIcon('radio-indeterminate', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/radio-indeterminate.svg'));
    iconRegistry.addSvgIcon('radio-unchecked', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/radio-unchecked.svg'));
    iconRegistry.addSvgIcon('radio', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/radio.svg'));
    iconRegistry.addSvgIcon('random', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/random.svg'));
    iconRegistry.addSvgIcon('ready', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/ready.svg'));
    iconRegistry.addSvgIcon('recent-changes', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/recent-changes.svg'));
    iconRegistry.addSvgIcon('record', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/record.svg'));
    iconRegistry.addSvgIcon('redo', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/redo.svg'));
    iconRegistry.addSvgIcon('refresh', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/refresh.svg'));
    iconRegistry.addSvgIcon('registry-resources', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/registry-resources.svg'));
    iconRegistry.addSvgIcon('registry', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/registry.svg'));
    iconRegistry.addSvgIcon('reload', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/reload.svg'));
    iconRegistry.addSvgIcon('remove', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/remove.svg'));
    iconRegistry.addSvgIcon('rename', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/rename.svg'));
    iconRegistry.addSvgIcon('repeat', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/repeat.svg'));
    iconRegistry.addSvgIcon('replace', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/replace.svg'));
    iconRegistry.addSvgIcon('reset', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/reset.svg'));
    iconRegistry.addSvgIcon('restore', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/restore.svg'));
    iconRegistry.addSvgIcon('retract', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/retract.svg'));
    iconRegistry.addSvgIcon('rewind', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/rewind.svg'));
    iconRegistry.addSvgIcon('right-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/right-key.svg'));
    iconRegistry.addSvgIcon('roller', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/roller.svg'));
    iconRegistry.addSvgIcon('row', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/row.svg'));
    iconRegistry.addSvgIcon('rss', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/rss.svg'));
    iconRegistry.addSvgIcon('rule', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/rule.svg'));
    iconRegistry.addSvgIcon('ruler', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/ruler.svg'));
    iconRegistry.addSvgIcon('satisfied', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/satisfied.svg'));
    iconRegistry.addSvgIcon('save', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/save.svg'));
    iconRegistry.addSvgIcon('saving', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/saving.svg'));
    iconRegistry.addSvgIcon('scanner', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/scanner.svg'));
    iconRegistry.addSvgIcon('screen', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/screen.svg'));
    iconRegistry.addSvgIcon('security', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/security.svg'));
    iconRegistry.addSvgIcon('select-all', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/select-all.svg'));
    iconRegistry.addSvgIcon('semaphore', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/semaphore.svg'));
    iconRegistry.addSvgIcon('server', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/server.svg'));
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/settings.svg'));
    iconRegistry.addSvgIcon('share', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/share.svg'));
    iconRegistry.addSvgIcon('shift-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/shift-key.svg'));
    iconRegistry.addSvgIcon('shift', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/shift.svg'));
    iconRegistry.addSvgIcon('show-blocks', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/show-blocks.svg'));
    iconRegistry.addSvgIcon('show', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/show.svg'));
    iconRegistry.addSvgIcon('sort-down', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/sort-down.svg'));
    iconRegistry.addSvgIcon('sort-up', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/sort-up.svg'));
    iconRegistry.addSvgIcon('spacebar', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/spacebar.svg'));
    iconRegistry.addSvgIcon('special-character', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/special-character.svg'));
    iconRegistry.addSvgIcon('spray', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/spray.svg'));
    iconRegistry.addSvgIcon('star-empty', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/star-empty.svg'));
    iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/star.svg'));
    iconRegistry.addSvgIcon('state', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/state.svg'));
    iconRegistry.addSvgIcon('stop', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/stop.svg'));
    iconRegistry.addSvgIcon('strickthrough', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/strickthrough.svg'));
    iconRegistry.addSvgIcon('sub-left', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/sub-left.svg'));
    iconRegistry.addSvgIcon('sub-right', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/sub-right.svg'));
    iconRegistry.addSvgIcon('subheading', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/subheading.svg'));
    iconRegistry.addSvgIcon('subindex', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/subindex.svg'));
    iconRegistry.addSvgIcon('superindex', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/superindex.svg'));
    iconRegistry.addSvgIcon('sync', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/sync.svg'));
    iconRegistry.addSvgIcon('tab-backwards', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/tab-backwards.svg'));
    iconRegistry.addSvgIcon('tab', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/tab.svg'));
    iconRegistry.addSvgIcon('table-header', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/table-header.svg'));
    iconRegistry.addSvgIcon('table', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/table.svg'));
    iconRegistry.addSvgIcon('tablet', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/tablet.svg'));
    iconRegistry.addSvgIcon('tag', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/tag.svg'));
    iconRegistry.addSvgIcon('target', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/target.svg'));
    iconRegistry.addSvgIcon('television', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/television.svg'));
    iconRegistry.addSvgIcon('text', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/text.svg'));
    iconRegistry.addSvgIcon('theme', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/theme.svg'));
    iconRegistry.addSvgIcon('tiny', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/tiny.svg'));
    iconRegistry.addSvgIcon('toc', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/toc.svg'));
    iconRegistry.addSvgIcon('translate', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/translate.svg'));
    iconRegistry.addSvgIcon('triangle', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/triangle.svg'));
    iconRegistry.addSvgIcon('trolley-full', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/trolley-full.svg'));
    iconRegistry.addSvgIcon('trolley', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/trolley.svg'));
    iconRegistry.addSvgIcon('trophy', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/trophy.svg'));
    iconRegistry.addSvgIcon('tune', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/tune.svg'));
    iconRegistry.addSvgIcon('underline', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/underline.svg'));
    iconRegistry.addSvgIcon('undo', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/undo.svg'));
    iconRegistry.addSvgIcon('unlink', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/unlink.svg'));
    iconRegistry.addSvgIcon('unlock', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/unlock.svg'));
    iconRegistry.addSvgIcon('up-key', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/up-key.svg'));
    iconRegistry.addSvgIcon('up', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/up.svg'));
    iconRegistry.addSvgIcon('upload', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/upload.svg'));
    iconRegistry.addSvgIcon('usb', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/usb.svg'));
    iconRegistry.addSvgIcon('user', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/user.svg'));
    iconRegistry.addSvgIcon('vertical', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/vertical.svg'));
    iconRegistry.addSvgIcon('video', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/video.svg'));
    iconRegistry.addSvgIcon('videocamera-off', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/videocamera-off.svg'));
    iconRegistry.addSvgIcon('videocamera', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/videocamera.svg'));
    iconRegistry.addSvgIcon('volume-low', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/volume-low.svg'));
    iconRegistry.addSvgIcon('volume-off', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/volume-off.svg'));
    iconRegistry.addSvgIcon('volume', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/volume.svg'));
    iconRegistry.addSvgIcon('warning', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/warning.svg'));
    iconRegistry.addSvgIcon('watch-side', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/watch-side.svg'));
    iconRegistry.addSvgIcon('watch', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/watch.svg'));
    iconRegistry.addSvgIcon('world', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/world.svg'));
    iconRegistry.addSvgIcon('yield', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/yield.svg'));
    iconRegistry.addSvgIcon('zoom-in', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/zoom-in.svg'));
    iconRegistry.addSvgIcon('zoom-off', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/zoom-off.svg'));
    iconRegistry.addSvgIcon('zoom-out', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/zoom-out.svg'));
    iconRegistry.addSvgIcon('zoom.svg', sanitizer.bypassSecurityTrustResourceUrl('../assets/Icons/zoom.svg'));
  }
 }
